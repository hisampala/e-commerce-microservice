import { Module } from "@nestjs/common";
import { ServiceProxy } from "../../../../../../libs/common/src";
import { LoginProxyService } from "../../service/login-proxy/login-proxy.service";

@Module({
  providers: [
    {
      provide: ServiceProxy.Login,
      useClass: LoginProxyService,
    },
  ],
  exports: [ServiceProxy.Login],
})
export class LoginModule {}
