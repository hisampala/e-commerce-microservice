import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";

export const ZUpdateUsersDto = z.optional(
  z.object({
    id: z.string().uuid(),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    address: z.object({
      id: z.string().uuid(),
      address: z.string().min(1),
      subdistrict: z.string().min(1),
      district: z.string().min(1),
      province: z.string().min(1),
      post_code: z.string().min(1),
    }),
    deliveryAddress: z.object({
      id: z.string().uuid(),
      address: z.string().min(1),
      subdistrict: z.string().min(1),
      district: z.string().min(1),
      province: z.string().min(1),
      post_code: z.string().min(1),
    }),
  }),
);
export const UpdateUsersSchema = generateSchema(extendApi(ZUpdateUsersDto));
export class UpdateUsersDto extends createZodDto(ZUpdateUsersDto) {}
