import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { PrismaClient } from "@DataStore/Products";
import { CommonModule } from "@common/core";

@Module({
  imports: [CommonModule],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaClient],
})
export class ProductsModule {}
