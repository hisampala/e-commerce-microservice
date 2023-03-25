import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
const ZUpdateProducts = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  sku: z.string().min(1),
  bar_code: z.string().min(1),
  amount: z.number(),
  cost: z.number(),
  price: z.number(),
});

export const UpdateProductsSchema = generateSchema(extendApi(ZUpdateProducts));
export class UpdateProductsDto extends createZodDto(ZUpdateProducts) {}
