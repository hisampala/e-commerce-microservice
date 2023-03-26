import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Queue } from "../../../libs/common/src";
import { OrdersModule } from "./orders/orders.module";

async function bootstrap() {
  const conf = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrdersModule,
    {
      transport: Transport.NATS,
      options: {
        servers: conf.get("MICROSERVICE_HOST"),
        queue: Queue.orders,
      },
    },
  );
  await app.listen();
}
bootstrap();
