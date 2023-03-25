import { ZodValidationPipe } from "@anatine/zod-nestjs";
import { Body, Controller, Inject, Post, UsePipes } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { ControllerPath, ServiceProxy } from "@common/core";
import { IUsersProxyService } from "../../../domain/service/users-proxy/users-proxy.service";
import {
  CreateUsersDto,
  CreateUsersSchema,
} from "../../../domain/dto/users/create-users.dto";

@Controller(ControllerPath.Register)
@ApiTags("Regsiter")
@UsePipes(ZodValidationPipe)
export class RegisterController {
  constructor(
    @Inject(ServiceProxy.Users)
    private readonly service: IUsersProxyService,
  ) {}
  @Post()
  @ApiBody({ schema: CreateUsersSchema })
  async onRegister(@Body() item: CreateUsersDto) {
    return this.service.CreateUsers(item);
  }
}
