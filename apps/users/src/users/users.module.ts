import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { CommonModule } from "../../../../libs/common/src";
import { PrismaClient } from "@DataStore/Users";

@Module({
  imports: [CommonModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaClient],
})
export class UsersModule {}
