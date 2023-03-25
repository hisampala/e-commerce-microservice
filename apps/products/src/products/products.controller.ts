import { Controller, Logger } from "@nestjs/common";
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from "@nestjs/microservices";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsEvent } from "@common/core";

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern(ProductsEvent.create_products)
  create(
    @Payload() createProductDto: CreateProductDto,
    @Ctx() context: NatsContext,
  ) {
    new Logger(ProductsController.name).log(JSON.stringify(context.getArgs()));
    return this.productsService.create(createProductDto);
  }

  @MessagePattern(ProductsEvent.get_products)
  findAll(@Ctx() context: NatsContext) {
    new Logger(ProductsController.name).log(JSON.stringify(context.getArgs()));
    return this.productsService.findAll();
  }

  @MessagePattern(ProductsEvent.get_products_by_Id)
  findOne(@Payload() id: string, @Ctx() context: NatsContext) {
    new Logger(ProductsController.name).log(JSON.stringify(context.getArgs()));
    return this.productsService.findOne(id);
  }

  @MessagePattern(ProductsEvent.update_products)
  update(
    @Payload() updateProductDto: UpdateProductDto,
    @Ctx() context: NatsContext,
  ) {
    new Logger(ProductsController.name).log(JSON.stringify(context.getArgs()));
    return this.productsService.update(updateProductDto.id, updateProductDto);
  }

  @MessagePattern(ProductsEvent.delelte_products)
  remove(@Payload() id: string, @Ctx() context: NatsContext) {
    new Logger(ProductsController.name).log(JSON.stringify(context.getArgs()));
    return this.productsService.remove(id);
  }
}
