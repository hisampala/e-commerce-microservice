import { Module } from "@nestjs/common";
import { Provide, ServiceProxy } from "@common/core";

import { OrderProxyService } from "../../service/order-proxy/order-proxy.service";

@Module({
  providers: [
    {
      provide: ServiceProxy.Orders,
      useClass: OrderProxyService,
    },
  ],
  exports: [ServiceProxy.Orders],
})
export class OrdersModule {}
