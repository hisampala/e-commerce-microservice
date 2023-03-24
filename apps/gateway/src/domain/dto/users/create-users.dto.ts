import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
import { hashSync } from "@node-rs/argon2";
export const ZCreateUsersDto = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().min(1),
  password: z
    .string()
    .min(1)
    .transform((v) => hashSync(v)),
  address: z.object({
    address: z.string().min(1),
    subdistrict: z.string().min(1),
    district: z.string().min(1),
    province: z.string().min(1),
    post_code: z.string().min(1),
  }),
  deliveryAddress: z.object({
    address: z.string().min(1),
    subdistrict: z.string().min(1),
    district: z.string().min(1),
    province: z.string().min(1),
    post_code: z.string().min(1),
  }),
});
export const CreateUsersSchema = generateSchema(extendApi(ZCreateUsersDto));
export class CreateUsersDto extends createZodDto(ZCreateUsersDto) {}
