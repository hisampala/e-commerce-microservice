import { Module } from "@nestjs/common";
import {
  OrdersModule,
  UsersModule,
  ProductsModule,
  LoginModule,
} from "../../../domain/modules";

@Module({
  imports: [UsersModule, ProductsModule, LoginModule, OrdersModule],
  exports: [UsersModule, ProductsModule, LoginModule, OrdersModule],
})
export class ProxyModule {}
