import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
const ZLoginDto = z.object({
  email: z.string().email(),
  password: z.string(),
});
export const LoginSchema = generateSchema(extendApi(ZLoginDto));
export class LoginDto extends createZodDto(ZLoginDto) {}
