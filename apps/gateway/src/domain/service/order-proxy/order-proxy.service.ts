import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { OrderEvent, Provide } from "../../../../../../libs/common/src";
import { CancleOrdersDto } from "../../dto/orders/cancle-orders";
import { CompleteOrdersDto } from "../../dto/orders/complete-orders";
import { CreateOrdersDto } from "../../dto/orders/create-orders";
import { ItemOrders } from "../../dto/orders/item-orders";
import { RefundOrdersDto } from "../../dto/orders/refund-orders";
import { UpdateOrdersDto } from "../../dto/orders/update-orders";
export interface IOrderProxyService {
  CreateOrders(item: CreateOrdersDto): Promise<ItemOrders>;
  UpdateOrders(id: string, item: UpdateOrdersDto): Promise<ItemOrders>;
  GetAllOrders(): Promise<ItemOrders[]>;
  GetOrdersById(id: string): Promise<ItemOrders>;
  CompletedOrders(item: CompleteOrdersDto): Promise<ItemOrders>;
  CanclempletedOrders(item: CancleOrdersDto): Promise<ItemOrders>;
  RefundOrders(item: RefundOrdersDto): Promise<ItemOrders>;
}
@Injectable()
export class OrderProxyService implements IOrderProxyService {
  constructor(
    @Inject(Provide.orders)
    private readonly orderClient: ClientProxy,
  ) {}

  async CreateOrders(item: CreateOrdersDto): Promise<ItemOrders> {
    try {
      const result = await firstValueFrom<ItemOrders>(
        this.orderClient.send(OrderEvent.create_Orders, item),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdateOrders(id: string, item: UpdateOrdersDto): Promise<ItemOrders> {
    try {
      await this.GetOrdersById(id);
      const result = await firstValueFrom(
        this.orderClient.send(OrderEvent.update_Orders, item),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async GetAllOrders(): Promise<ItemOrders[]> {
    try {
      const result = await firstValueFrom<ItemOrders[]>(
        this.orderClient.send(OrderEvent.get_Orders, {}),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async GetOrdersById(id: string): Promise<ItemOrders> {
    try {
      try {
        const result = await firstValueFrom<ItemOrders>(
          this.orderClient.send(OrderEvent.get_Orders_by_Id, id),
        );

        if (!result) {
          throw new BadRequestException(`Notfount orders Id :${id}`);
        }
        return result;
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async CompletedOrders(item: CompleteOrdersDto): Promise<ItemOrders> {
    try {
      const result = await firstValueFrom<ItemOrders>(
        this.orderClient.send(OrderEvent.complete, item),
      );
      return result;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(error);
    }
  }
  async CanclempletedOrders(item: CancleOrdersDto): Promise<ItemOrders> {
    try {
      await this.GetOrdersById(item.id);
      const result = await firstValueFrom<ItemOrders>(
        this.orderClient.send(OrderEvent.cancle, item),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async RefundOrders(item: RefundOrdersDto): Promise<ItemOrders> {
    try {
      await this.GetOrdersById(item.id);
      const result = await firstValueFrom<ItemOrders>(
        this.orderClient.send(OrderEvent.refund, item),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
