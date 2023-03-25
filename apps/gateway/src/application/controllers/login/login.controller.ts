import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UsePipes,
} from "@nestjs/common";
import { ControllerPath, ServiceProxy } from "@common/core";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { LoginDto, LoginSchema } from "../../../domain/dto/login/login.dto";
import { ILoginProxyService } from "../../../domain/service/login-proxy/login-proxy.service";
import { ZodValidationPipe } from "@anatine/zod-nestjs";

@Controller(ControllerPath.Login)
@ApiTags("login")
@UsePipes(ZodValidationPipe)
export class LoginController {
  constructor(
    @Inject(ServiceProxy.Login)
    private readonly service: ILoginProxyService,
  ) {}
  @Post("")
  @HttpCode(HttpStatus.OK)
  @ApiBody({
    schema: LoginSchema,
  })
  async Login(@Body() item: LoginDto) {
    try {
      return await this.service.OnLogin(item);
    } catch (error) {
      throw error;
    }
  }
}
