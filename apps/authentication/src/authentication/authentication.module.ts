import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { PrismaClient } from "@DataStore/Users";
import { CommonModule } from "../../../../libs/common/src";

@Module({
  imports: [CommonModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, PrismaClient],
})
export class AuthenticationModule {}
