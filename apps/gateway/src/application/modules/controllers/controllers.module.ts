import { Module } from "@nestjs/common";
import { UsersModule } from "../../../domain/modules/users/users.module";
import { UsersController } from "../../controllers/users/users.controller";

@Module({
  imports: [UsersModule],
  controllers: [UsersController],
})
export class ControllersModule {}
