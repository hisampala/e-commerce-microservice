import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { OrdersProvider, ProductsProvider, UsersProvider } from "./providers";
import { CommonService } from "./service/common.service";
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./.env",
    }),
  ],
  providers: [CommonService, ProductsProvider, UsersProvider, OrdersProvider],
  exports: [CommonService, ProductsProvider, UsersProvider, OrdersProvider],
})
export class CommonModule {}
