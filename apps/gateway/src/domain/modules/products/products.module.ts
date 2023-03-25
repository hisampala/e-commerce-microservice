import { Module } from "@nestjs/common";
import { ServiceProxy } from "../../../../../../libs/common/src";
import { ProductsProxyService } from "../../service/products-proxy/products-proxy.service";

@Module({
  providers: [
    {
      provide: ServiceProxy.Products,
      useClass: ProductsProxyService,
    },
  ],
  exports: [ServiceProxy.Products],
})
export class ProductsModule {}
