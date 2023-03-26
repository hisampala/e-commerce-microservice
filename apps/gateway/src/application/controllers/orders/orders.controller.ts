import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import {
  ControllerPath,
  GetUserId,
  JwtAuthGuard,
  ServiceProxy,
} from "@common/core";
import { IOrderProxyService } from "../../../domain/service/order-proxy/order-proxy.service";
import { ItemOrders } from "../../../domain/dto/orders/item-orders";
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import {
  CreateOrdersDto,
  CreateOrdersSchema,
} from "../../../domain/dto/orders/create-orders";
import {
  CompleteOrdersDto,
  CompleteOrdersSchema,
} from "../../../domain/dto/orders/complete-orders";
import {
  CancleOrdersDto,
  CancleOrdersSchema,
} from "../../../domain/dto/orders/cancle-orders";
import {
  RefundOrdersDto,
  RefundOrdersSchema,
} from "../../../domain/dto/orders/refund-orders";

@Controller(ControllerPath.Orders)
@ApiTags("Orders")
export class OrdersController {
  constructor(
    @Inject(ServiceProxy.Orders) private readonly service: IOrderProxyService,
  ) {}
  @Get()
  @ApiBearerAuth()
  @ApiResponse({ type: ItemOrders, isArray: true })
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async GetAll() {
    return this.service.GetAllOrders();
  }
  @Get(":id")
  @ApiBearerAuth()
  @ApiResponse({ type: ItemOrders })
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async GetById(@Param("id") id: string) {
    return this.service.GetOrdersById(id);
  }
  @Post()
  @ApiBearerAuth()
  @ApiBody({ schema: CreateOrdersSchema })
  @ApiResponse({ type: ItemOrders })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(@Body() item: CreateOrdersDto, @GetUserId() id: string) {
    item["customerId"] = id;
    return this.service.CreateOrders(item);
  }
  @Post("complete")
  @ApiBearerAuth()
  @ApiBody({ schema: CompleteOrdersSchema })
  @ApiResponse({ type: ItemOrders })
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async orderComplete(@Body() item: CompleteOrdersDto) {
    return this.service.CompletedOrders(item);
  }
  @Post("cancle")
  @ApiBearerAuth()
  @ApiBody({ schema: CancleOrdersSchema })
  @ApiResponse({ type: ItemOrders })
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async orderCancle(@Body() item: CancleOrdersDto) {
    return this.service.CanclempletedOrders(item);
  }
  @Post("refund")
  @ApiBearerAuth()
  @ApiBody({ schema: RefundOrdersSchema })
  @ApiResponse({ type: ItemOrders })
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async orderRefund(@Body() item: RefundOrdersDto) {
    return this.service.RefundOrders(item);
  }
}
