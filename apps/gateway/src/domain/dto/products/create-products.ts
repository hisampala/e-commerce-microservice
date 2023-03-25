import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
const ZCreateProducts = z.object({
  name: z.string().min(1),
  sku: z.string().min(1),
  bar_code: z.string().min(1),
  amount: z.number().default(0),
  cost: z.number().default(0),
  price: z.number().default(0),
});
export const CreateProductsSchema = generateSchema(extendApi(ZCreateProducts));
export class CreateProductsDto extends createZodDto(ZCreateProducts) {}
