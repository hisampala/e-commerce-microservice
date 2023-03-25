import { Prisma, PrismaClient } from "@DataStore/Products";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
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
}
