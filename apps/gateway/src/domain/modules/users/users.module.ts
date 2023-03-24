import { Module } from "@nestjs/common";
import { CommonModule, ServiceProxy } from "@common/core";
import { UsersProxyService } from "../../service/users-proxy/users-proxy.service";

@Module({
  providers: [
    {
      provide: ServiceProxy.Users,
      useClass: UsersProxyService,
    },
  ],
  exports: [ServiceProxy.Users],
})
export class UsersModule {}
