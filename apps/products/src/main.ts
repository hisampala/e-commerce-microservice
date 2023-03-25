import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Queue } from "../../../libs/common/src";

import { ProductsModule } from "./products/products.module";

async function bootstrap() {
  const conf = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductsModule,
    {
      transport: Transport.NATS,
      options: {
        servers: conf.get("MICROSERVICE_HOST"),
        queue: Queue.products,
      },
    },
  );
  await app.listen();
}
bootstrap();
