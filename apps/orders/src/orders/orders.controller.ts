import { Controller, Logger } from "@nestjs/common";
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from "@nestjs/microservices";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { OrderEvent } from "@common/core";
import { OnCompleteOrdersDto } from "./dto/on-complete-orders.dto";
import { OnCancleOrdersDto } from "./dto/on-cancle-orders.dto";
import { OnRefundOrdersDto } from "./dto/on-refund-orders.dto";

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern(OrderEvent.create_Orders)
  create(
    @Payload() createOrderDto: CreateOrderDto,
    @Ctx() context: NatsContext,
  ) {
    new Logger(OrdersController.name).log(JSON.stringify(context.getArgs()));
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern(OrderEvent.get_Orders)
  findAll(@Ctx() context: NatsContext) {
    new Logger(OrdersController.name).log(JSON.stringify(context.getArgs()));
    return this.ordersService.findAll();
  }

  @MessagePattern(OrderEvent.get_Orders_by_Id)
  findOne(@Payload() id: string, @Ctx() context: NatsContext) {
    new Logger(OrdersController.name).log(JSON.stringify(context.getArgs()));
    return this.ordersService.findOne(id);
  }

  @MessagePattern(OrderEvent.update_Orders)
  update(
    @Payload() updateOrderDto: UpdateOrderDto,
    @Ctx() context: NatsContext,
  ) {
    new Logger(OrdersController.name).log(JSON.stringify(context.getArgs()));
    return this.ordersService.update(updateOrderDto.id, updateOrderDto);
  }
  @MessagePattern(OrderEvent.complete)
  complete(@Payload() Item: OnCompleteOrdersDto, @Ctx() context: NatsContext) {
    new Logger(OrdersController.name).log(JSON.stringify(context.getArgs()));
    return this.ordersService.onUpdateStatus(
      Object.assign(new OnCompleteOrdersDto(), Item),
    );
  }
  @MessagePattern(OrderEvent.cancle)
  cancle(@Payload() Item: OnCancleOrdersDto, @Ctx() context: NatsContext) {
    new Logger(OrdersController.name).log(JSON.stringify(context.getArgs()));
    return this.ordersService.onUpdateStatus(
      Object.assign(new OnCancleOrdersDto(), Item),
    );
  }
  @MessagePattern(OrderEvent.refund)
  refund(@Payload() Item: OnRefundOrdersDto, @Ctx() context: NatsContext) {
    new Logger(OrdersController.name).log(JSON.stringify(context.getArgs()));
    return this.ordersService.onUpdateStatus(
      Object.assign(new OnRefundOrdersDto(), Item),
    );
  }
}
