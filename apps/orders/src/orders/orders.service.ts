import { OrderDetail, Orders, PrismaClient } from "@DataStore/Orders";
import {
  BadRequestException,
  Inject,
  Injectable,
  OnModuleInit,
} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ProductsEvent, Provide, UsersEvent } from "@common/core";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { firstValueFrom } from "rxjs";
import { ItemCustomer } from "./dto/customer-item.dto";
import { ItemProducts } from "./dto/products-item";
import { ItemOrders } from "../orders/dto/orders-item";
import { OnCompleteOrdersDto } from "./dto/on-complete-orders.dto";
import { OnCancleOrdersDto } from "./dto/on-cancle-orders.dto";
import { OnRefundOrdersDto } from "./dto/on-refund-orders.dto";

@Injectable()
export class OrdersService implements OnModuleInit {
  constructor(
    private readonly context: PrismaClient,
    @Inject(Provide.Users) private readonly usersClient: ClientProxy,
    @Inject(Provide.products) private readonly productsClient: ClientProxy,
  ) {}
  async onModuleInit() {
    await this.context.$connect();
  }
  async create(createOrderDto: CreateOrderDto) {
    try {
      const customer = await this.getCustomer(createOrderDto.customerId);
      return await this.context.$transaction(async (tx) => {
        try {
          const createOrder = await tx.orders.create({
            data: {
              customerId: customer.id,
              paymant: createOrderDto.paymant,
              remark: createOrderDto.remark,
              status: createOrderDto.status,
            },
            include: { OrderDetail: true },
          });
          const CreateorderDetail = createOrderDto.Detail.map(
            async (detail) => {
              const products = await this.GetProductsById(detail.productId);
              detail.orderId = createOrder.id;
              detail.amount = detail.amount;
              detail.cost = products.cost;
              detail.price = products.price;
              return tx.orderDetail.create({ data: detail });
            },
          );
          const OrderDetail = await Promise.all(CreateorderDetail);
          createOrder.OrderDetail = OrderDetail;
          return createOrder;
        } catch (error) {
          console.log(error);
          return error;
        }
      });
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  async findAll() {
    try {
      const data = await this.context.orders.findMany({
        include: { OrderDetail: true },
      });
      const newData = await Promise.all(
        data.map(async (result) => {
          return this.ConvertObjectOrders(result);
        }),
      );
      return newData;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.context.orders.findUnique({
        where: { id: id },
        include: { OrderDetail: true },
      });
      if (!result) {
        return null;
      }
      return this.ConvertObjectOrders(result);
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      return await this.context.$transaction(async (tx) => {
        try {
          const updateOrder = await tx.orders.update({
            where: { id: id },
            data: {
              paymant: updateOrderDto.paymant,
              remark: updateOrderDto.remark,
              status: updateOrderDto.status,
            },
            include: { OrderDetail: true },
          });
          const updateOrderDetail = updateOrderDto.Detail.map(
            async (detail) => {
              await this.GetProductsById(detail.productId);
              return tx.orderDetail.update({ where: { id }, data: detail });
            },
          );
          const OrderDetail = await Promise.all(updateOrderDetail);
          updateOrder.OrderDetail = OrderDetail;
          return updateOrder;
        } catch (error) {
          return error;
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async getCustomer(id: string) {
    try {
      const user = await firstValueFrom<ItemCustomer>(
        this.usersClient.send(UsersEvent.get_users_by_Id, id),
      );
      if (!user) {
        throw new BadRequestException(`Notfount User Id :${id}`);
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
  async GetProductsById(id: string) {
    try {
      const product = await firstValueFrom<ItemProducts>(
        this.productsClient.send(ProductsEvent.get_products_by_Id, id),
      );
      if (!product) {
        throw new BadRequestException(`Notfount products Id :${id}`);
      }
      return product;
    } catch (error) {
      throw error;
    }
  }
  async onUpdateStatus(
    item: OnCompleteOrdersDto | OnCancleOrdersDto | OnRefundOrdersDto,
  ) {
    try {
      if (item instanceof OnCompleteOrdersDto) {
        const order = await this.findOne(item.id);
        console.log(item);
        if (order.status !== "Draf" && item.status === "Completed") {
          throw new BadRequestException(
            "Failed because it is not in state. Draf",
          );
        } else {
          return this.ConvertObjectOrders(await this.onComplete(order));
        }
      }
      if (item instanceof OnCancleOrdersDto) {
        const order = await this.findOne(item.id);
        if (order.status !== "Draf" && item.status === "Cancle") {
          throw new BadRequestException(
            "Failed because it is not in state. Draf",
          );
        } else {
          return this.ConvertObjectOrders(await this.onCancle(order));
        }
      }
      if (item instanceof OnRefundOrdersDto) {
        const order = await this.findOne(item.id);
        if (order.status !== "Completed" && item.status === "Refund") {
          throw new BadRequestException(
            "Failed because it is not in state. Complete",
          );
        } else {
          return this.ConvertObjectOrders(await this.onRefund(order));
        }
      }
      throw new BadRequestException("Fail");
    } catch (error) {
      throw error;
    }
  }
  private async updateStockProducts(item: Partial<ItemProducts>) {
    const update = await firstValueFrom<ItemProducts>(
      this.productsClient.send(ProductsEvent.update_products, item),
    );
    return update;
  }
  private async onComplete(item: ItemOrders) {
    return await this.context.$transaction(async (tx) => {
      try {
        const updatestatus = await tx.orders.update({
          where: { id: item.id },
          data: { status: "Completed" },
          include: { OrderDetail: true },
        });
        const UpdateProducts = updatestatus.OrderDetail.map(async (result) => {
          const product = await this.GetProductsById(result.productId);
          product.amount = product.amount - result.amount;
          return this.updateStockProducts({
            id: product.id,
            amount: product.amount,
          });
        });
        await Promise.all(UpdateProducts);
        return updatestatus;
      } catch (error) {
        console.log(error);

        return error;
      }
    });
  }
  private async onCancle(item: ItemOrders) {
    const updateStstus = await this.context.orders.update({
      where: { id: item.id },
      data: { status: "Cancle" },
      include: { OrderDetail: true },
    });
    return updateStstus;
  }
  private async ConvertObjectOrders(
    result: Orders & {
      OrderDetail: OrderDetail[];
    },
  ) {
    const newOrderForm = new ItemOrders();
    newOrderForm.id = result.id;
    newOrderForm.paymant = result.paymant;
    newOrderForm.remark = result.remark;
    newOrderForm.status = result.status;
    newOrderForm.Detail = await Promise.all(
      result.OrderDetail.map(async (detail) => {
        const product = await this.GetProductsById(detail.productId);
        return {
          amount: detail.amount,
          id: detail.id,
          orderId: detail.orderId,
          price: detail.price,
          name: product.name,
          productId: detail.productId,
        };
      }),
    );
    newOrderForm.total_amount = newOrderForm.Detail.reduce((per, cur) => {
      return per + cur.amount;
    }, 0);
    newOrderForm.total_price = newOrderForm.Detail.reduce((per, cur) => {
      return per + cur.price * cur.amount;
    }, 0);
    newOrderForm.totol_product_count = newOrderForm.Detail.length;
    newOrderForm.customerId = result.customerId;
    newOrderForm.Customer = await this.getCustomer(result.customerId);

    return newOrderForm;
  }
  private async onRefund(item: ItemOrders) {
    return await this.context.$transaction(async (tx) => {
      try {
        const updatestatus = await tx.orders.update({
          where: { id: item.id },
          data: { status: "Refund" },
          include: { OrderDetail: true },
        });
        const UpdateProducts = updatestatus.OrderDetail.map(async (result) => {
          const product = await this.GetProductsById(result.productId);
          product.amount = product.amount + result.amount;
          return this.updateStockProducts({
            id: product.id,
            amount: product.amount,
          });
        });
        await Promise.all(UpdateProducts);
        return updatestatus;
      } catch (error) {
        console.log(error);

        return error;
      }
    });
  }
}
