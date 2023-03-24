import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { GatewayModule } from "./application/modules/gateway.module";
import { patchNestjsSwagger } from "@anatine/zod-nestjs";
async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  const config = new DocumentBuilder()
    .setTitle("E-Commerce  Wepservice")
    .setDescription("The E-Commerce API description")
    .setVersion("1.0")
    .build();
  patchNestjsSwagger();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(3000);
}
bootstrap();
