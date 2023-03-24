import { Module } from "@nestjs/common";
import { OrdersModule } from "../../../domain/modules/orders/orders.module";
import { ProductsModule } from "../../../domain/modules/products/products.module";
import { UsersModule } from "../../../domain/modules/users/users.module";

@Module({
  imports: [OrdersModule, UsersModule, ProductsModule],
  exports: [OrdersModule, UsersModule, ProductsModule],
})
export class ProxyModule {}
