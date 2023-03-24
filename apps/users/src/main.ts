import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { UsersModule } from "./users/users.module";
import { ConfigService } from "@nestjs/config";
import { Queue } from "@common/core";
async function bootstrap() {
  const conf = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.NATS,
      options: {
        servers: conf.get("MICROSERVICE_HOST"),
        queue: Queue.Users,
      },
    },
  );
  await app.listen();
}
bootstrap();
