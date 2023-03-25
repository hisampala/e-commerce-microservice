import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
const ZCreateProductsStock = z.object({
  stock_code: z.string(),
  Detail: z.array(
    z.object({
      productsId: z.string(),
      amont_new_stock: z.number(),
      cost_new: z.number(),
    }),
  ),
});
export const CreateStockProductsSchema = generateSchema(
  extendApi(ZCreateProductsStock),
);
export class CreateStockProductsDto extends createZodDto(
  ZCreateProductsStock,
) {}
