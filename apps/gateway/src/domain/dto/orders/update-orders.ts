import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
const ZUpdateOrders = z.object({
  id: z.string().uuid(),
  paymant: z.enum(["Cash", "BaskTranfer", "CreditCard"]).default("Cash"),
  status: z.enum(["Draf", "Completed", "Cancle", "Refund"]).default("Draf"),
  remark: z.string(),
  customerId: z.string(),
  Detail: z.array(
    z.object({
      id: z.string().uuid(),
      productId: z.string(),
      amount: z.number(),
      price: z.number(),
      cost: z.number(),
    }),
  ),
});
export const UpdateOrdersSchema = generateSchema(extendApi(ZUpdateOrders));
export class UpdateOrdersDto extends createZodDto(ZUpdateOrders) {}
