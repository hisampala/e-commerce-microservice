import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { ClientNats } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { ProductsEvent, Provide } from "../../../../../../libs/common/src";

import { CreateProductsDto } from "../../dto/products/create-products";
import { ItemProducts } from "../../dto/products/item-products";
import { CreateStockProductsDto } from "../../dto/products/stock/create-stock";
import { ItemStock } from "../../dto/products/stock/item-stock";
import { UpdateProductsDto } from "../../dto/products/update-products";
export interface IProductsProxyService {
  CreateProducts(item: CreateProductsDto): Promise<ItemProducts>;
  UpdateProducts(id: string, item: UpdateProductsDto): Promise<ItemProducts>;
  DeleteProducts(id: string): Promise<ItemProducts>;
  GetAllProducts(): Promise<ItemProducts[]>;
  GetProductsById(id: string): Promise<ItemProducts>;
  CreatStockProducts(item: CreateStockProductsDto): Promise<ItemStock>;
  GetProductsStock(id: string): Promise<ItemStock[]>;
}
@Injectable()
export class ProductsProxyService implements IProductsProxyService {
  constructor(
    @Inject(Provide.products)
    private readonly productClient: ClientNats,
  ) {}

  async CreateProducts(item: CreateProductsDto): Promise<ItemProducts> {
    try {
      const result = await firstValueFrom<ItemProducts>(
        this.productClient.send(ProductsEvent.create_products, item),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async UpdateProducts(
    id: string,
    item: UpdateProductsDto,
  ): Promise<ItemProducts> {
    try {
      const products = await firstValueFrom<ItemProducts>(
        this.productClient.send(ProductsEvent.get_products_by_Id, id),
      );
      if (!products) {
        throw new BadRequestException(`Nofount products Id : ${id}`);
      }
      const result = await firstValueFrom<ItemProducts>(
        this.productClient.send(ProductsEvent.update_products, item),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async DeleteProducts(id: string): Promise<ItemProducts> {
    try {
      const products = await firstValueFrom<ItemProducts>(
        this.productClient.send(ProductsEvent.get_products_by_Id, id),
      );
      if (!products) {
        throw new BadRequestException(`Nofount products Id : ${id}`);
      }
      const result = await firstValueFrom<ItemProducts>(
        this.productClient.send(ProductsEvent.delelte_products, id),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async GetAllProducts(): Promise<ItemProducts[]> {
    try {
      const result = await firstValueFrom<ItemProducts[]>(
        this.productClient.send(ProductsEvent.get_products, {}),
      );
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async GetProductsById(id: string): Promise<ItemProducts> {
    try {
      const result = await firstValueFrom<ItemProducts>(
        this.productClient.send(ProductsEvent.get_products_by_Id, id),
      );
      if (!result) {
        throw new BadRequestException(`Nofount products Id : ${id}`);
      }
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async CreatStockProducts(item: CreateStockProductsDto): Promise<ItemStock> {
    try {
      const result = await firstValueFrom<ItemStock>(
        this.productClient.send(ProductsEvent.create_stock_products, item),
      );
      return result;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(error);
    }
  }
  async GetProductsStock(id: string): Promise<ItemStock[]> {
    try {
      const result = await firstValueFrom<ItemStock[]>(
        this.productClient.send(ProductsEvent.get_stock_products, id),
      );
      return result;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(error);
    }
  }
}
