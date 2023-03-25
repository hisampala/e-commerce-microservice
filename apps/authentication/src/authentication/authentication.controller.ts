import { Controller } from "@nestjs/common";
import { LoginEvent } from "@common/core";
import { AuthenticationService } from "./authentication.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { Login } from "./dto/login";

@Controller()
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
  @MessagePattern(LoginEvent.login)
  async login(@Payload() item: Login) {
    return this.authenticationService.Auth(item);
  }
}
