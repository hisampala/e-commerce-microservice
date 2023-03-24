import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { CommonModule } from "../../../../libs/common/src";

@Module({
  imports: [CommonModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
