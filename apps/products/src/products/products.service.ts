import { Prisma, PrismaClient } from "@DataStore/Products";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateProductDto } from "./dto/create-product.dto";
import { CreateStockProductDto } from "./dto/create-stock-products.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
interface softdelete {
  deleted_date: Date;
  is_deleted: boolean;
}
@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(private context: PrismaClient) {}

  async onModuleInit() {
    await this.context.$use(async (params: Prisma.MiddlewareParams, next) => {
      if (params) {
        if (params.action === "delete") {
          params.action = "update";
          params.args["data"] = {
            is_deleted: true,
            deleted_date: new Date(),
          } as softdelete;
        }

        return next(params);
      } else {
        return next(params);
      }
    });
    await this.context.$connect();
  }
  async create(createProductDto: CreateProductDto) {
    try {
      const result = await this.context.products.create({
        data: {
          bar_code: createProductDto.bar_code,
          name: createProductDto.name,
          sku: createProductDto.sku,
          user_create: createProductDto.user_create,
          user_update: createProductDto.user_create,
          amount: createProductDto.amount,
          cost: createProductDto.cost,
          price: createProductDto.price,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const result = await this.context.products.findMany({});
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.context.products.findUnique({
        where: { id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const result = await this.context.products.update({
        where: { id: id },
        data: updateProductDto,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const result = await this.context.products.delete({ where: { id: id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  async createStock(item: CreateStockProductDto) {
    try {
      const result = await this.context.$transaction(async (tx) => {
        try {
          const id = randomUUID();
          const createStock = await tx.stokProducts.create({
            data: {
              id: id,
              stock_code: item.stock_code,
              user_create: item.user_create,
              user_update: item.user_create,
            },
            include: { Detail: { include: { Products: true } } },
          });
          const Detail = item.Detail.map(async (detail) => {
            detail.stokProductsId = id;
            const products = await this.findOne(detail.productsId);
            detail.cost_old = products.cost;
            detail.amont_old_stock = products.amount;
            return tx.stokProductsDetail.create({
              data: detail,
              include: { Products: true },
            });
          });
          const StockDetail = await Promise.all(Detail);
          createStock.Detail = StockDetail;
          const UpdateStokcAndCostProduct = StockDetail.map(async (detail) => {
            const productsData = await this.findOne(detail.productsId);
            const amountnew = detail.amont_new_stock;
            const costnew = detail.cost_new;
            productsData.cost = this.CalculatedNewCode(
              productsData.amount,
              productsData.cost,
              amountnew,
              costnew,
            );
            productsData.amount = productsData.amount + amountnew;
            return tx.products.update({
              where: { id: productsData.id },
              data: productsData,
            });
          });
          const products = await Promise.all(UpdateStokcAndCostProduct);
          createStock.Detail = createStock.Detail.map((result) => {
            result.Products = products.find(
              (item) => item.id === result.productsId,
            );
            return result;
          });
          return createStock;
        } catch (error) {
          return error;
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  async stockProducts(id: string) {
    try {
      return this.context.stokProducts.findMany({
        where: {
          Detail: {
            every: {
              productsId: id,
            },
          },
        },
        include: { Detail: true },
      });
    } catch (error) {
      throw error;
    }
  }
  private CalculatedNewCode(
    oldStock: number,
    oldcost: number,
    newStock: number,
    newCost: number,
  ) {
    const calOldData = oldStock * oldcost;
    const calNewData = newStock * newCost;
    const total = (calNewData + calOldData) / oldStock + newStock;
    return total;
  }
}
