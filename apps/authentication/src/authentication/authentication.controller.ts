import { Controller } from "@nestjs/common";
import { LoginEvent } from "@common/core";
import { AuthenticationService } from "./authentication.service";
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from "@nestjs/microservices";
import { Login } from "./dto/login";

@Controller()
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
  @MessagePattern(LoginEvent.connected)
  async connect() {
    return "ok";
  }
  @MessagePattern(LoginEvent.login)
  async login(@Payload() item: Login) {
    return this.authenticationService.Auth(item);
  }
}
