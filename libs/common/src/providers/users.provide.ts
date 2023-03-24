import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { Provide } from "../constants/provide";
import { Queue } from "../constants/queue";

export const UsersProvider: Provider = {
  provide: Provide.Users,
  useFactory: (config: ConfigService) =>
    ClientProxyFactory.create({
      transport: Transport.NATS,
      options: {
        servers: [config.get("MICROSERVICE_HOST")],
        queue: Queue.Users,
      },
    }),
  inject: [ConfigService],
};
