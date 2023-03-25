import { Module } from "@nestjs/common";
import {
  OrdersModule,
  UsersModule,
  ProductsModule,
  LoginModule,
} from "../../../domain/modules";

@Module({
  imports: [OrdersModule, UsersModule, ProductsModule, LoginModule],
  exports: [OrdersModule, UsersModule, ProductsModule, LoginModule],
})
export class ProxyModule {}
