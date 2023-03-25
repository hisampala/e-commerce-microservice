import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import {
  LoginProvider,
  OrdersProvider,
  ProductsProvider,
  UsersProvider,
} from "./providers";
import { AuthService } from "./service/auth";
import { CommonService } from "./service/common.service";
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./.env",
    }),
    JwtModule.registerAsync({
      useFactory: (conf: ConfigService) => ({
        secret: conf.get("JWT_SECRET"),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    CommonService,
    ProductsProvider,
    UsersProvider,
    OrdersProvider,
    AuthService,
    LoginProvider,
    JwtService,
    ConfigService,
  ],
  exports: [
    CommonService,
    ProductsProvider,
    UsersProvider,
    OrdersProvider,
    AuthService,
    LoginProvider,
    JwtService,
    ConfigService,
    JwtModule,
    ConfigModule,
  ],
})
export class CommonModule {}
