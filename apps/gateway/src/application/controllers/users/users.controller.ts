import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Put,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import {
  ControllerPath,
  GetUserId,
  JwtAuthGuard,
  ServiceProxy,
} from "@common/core";
import { IUsersProxyService } from "../../../domain/service/users-proxy/users-proxy.service";
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ItemUsers } from "../../../domain/dto/users/item-users.dto";
import { ZodValidationPipe } from "@anatine/zod-nestjs";
import {
  UpdateUsersDto,
  UpdateUsersSchema,
} from "../../../domain/dto/users/update-users.dto";
import { ItemOrders } from "../../../domain/dto/orders/item-orders";

@Controller(ControllerPath.Users)
@ApiTags("Users")
@UsePipes(ZodValidationPipe)
export class UsersController {
  constructor(
    @Inject(ServiceProxy.Users)
    private readonly service: IUsersProxyService,
  ) {}

  @Get("me")
  @ApiBearerAuth()
  @ApiResponse({ type: ItemUsers, status: "2XX" })
  @UseGuards(JwtAuthGuard)
  getMe(@GetUserId() id: string) {
    console.log(id);

    return this.service.GetUsersById(id);
  }

  @Get("orders")
  @ApiBearerAuth()
  @ApiResponse({ type: ItemOrders, isArray: true, status: "2XX" })
  @UseGuards(JwtAuthGuard)
  getOrders(@GetUserId() id: string) {
    return this.service.GetOrders(id);
  }
  @Put(":id")
  @ApiBearerAuth()
  @ApiResponse({ type: ItemUsers })
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    schema: UpdateUsersSchema,
  })
  update(@Param("id") id: string, @Body() item: UpdateUsersDto) {
    return this.service.UpdateUsers(id, item);
  }
}
