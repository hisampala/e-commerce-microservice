import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Put,
  UsePipes,
} from "@nestjs/common";
import { ControllerPath, ServiceProxy } from "@common/core";
import { IUsersProxyService } from "../../../domain/service/users-proxy/users-proxy.service";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ItemUsers } from "../../../domain/dto/users/item-users.dto";
import { Post } from "@nestjs/common";
import {
  CreateUsersSchema,
  CreateUsersDto,
} from "../../../domain/dto/users/create-users.dto";
import { ZodValidationPipe } from "@anatine/zod-nestjs";
import {
  UpdateUsersDto,
  UpdateUsersSchema,
} from "../../../domain/dto/users/update-users.dto";

@Controller(ControllerPath.Users)
@ApiTags("Users")
@UsePipes(ZodValidationPipe)
export class UsersController {
  constructor(
    @Inject(ServiceProxy.Users)
    private readonly service: IUsersProxyService,
  ) {}
  @Get("")
  @ApiResponse({ type: ItemUsers, isArray: true })
  getAll() {
    return this.service.GetAllUsers();
  }
  @Get(":id")
  @ApiResponse({ type: ItemUsers })
  getById(@Param("id") id: string) {
    return this.service.GetUsersById(id);
  }
  @Post("")
  @ApiResponse({ type: ItemUsers })
  @ApiBody({
    schema: CreateUsersSchema,
  })
  create(@Body() item: CreateUsersDto) {
    return this.service.CreateUsers(item);
  }
  @Put(":id")
  @ApiResponse({ type: ItemUsers })
  @ApiBody({
    schema: UpdateUsersSchema,
  })
  update(@Param("id") id: string, @Body() item: UpdateUsersDto) {
    return this.service.UpdateUsers(id, item);
  }
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.service.DeleteUsers(id);
  }
}
