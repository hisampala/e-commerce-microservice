import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Queue } from "../../../libs/common/src";
import { AuthenticationModule } from "./authentication/authentication.module";

async function bootstrap() {
  const conf = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthenticationModule,
    {
      transport: Transport.NATS,
      options: {
        servers: conf.get("MICROSERVICE_HOST"),
        queue: Queue.login,
      },
    },
  );
  await app.listen();
}
bootstrap();
