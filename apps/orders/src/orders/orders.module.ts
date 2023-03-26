import { Module } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { CommonModule } from "@common/core";
import { PrismaClient } from "@DataStore/Orders";

@Module({
  imports: [CommonModule],
  controllers: [OrdersController],
  providers: [OrdersService, PrismaClient],
})
export class OrdersModule {}
