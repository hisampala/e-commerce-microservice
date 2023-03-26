import { Module } from "@nestjs/common";
import { ProxyModule } from "./proxy/proxy.module";
import { ControllersModule } from "./controllers/controllers.module";
import { CommonModule } from "@common/core";

@Module({
  imports: [CommonModule, ProxyModule, ControllersModule],
  exports: [ProxyModule],
})
export class GatewayModule {}
