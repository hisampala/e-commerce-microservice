import { Module } from "@nestjs/common";
import { LoginController } from "../../controllers/login/login.controller";
import { ProductsController } from "../../controllers/products/products.controller";
import { RegisterController } from "../../controllers/register/register.controller";
import { UsersController } from "../../controllers/users/users.controller";
import { ProxyModule } from "../proxy/proxy.module";

@Module({
  imports: [ProxyModule],
  controllers: [
    LoginController,
    RegisterController,
    UsersController,
    ProductsController,
  ],
})
export class ControllersModule {}
