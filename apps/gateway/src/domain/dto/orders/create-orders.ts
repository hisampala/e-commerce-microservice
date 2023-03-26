import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
const ZCreateOrders = z.object({
  paymant: z.enum(["Cash", "BaskTranfer", "CreditCard"]),
  status: z.enum(["Draf", "Completed", "Cancle", "Refund"]),
  remark: z.string(),
  Detail: z.array(
    z.object({
      productId: z.string(),
      amount: z.number(),
    }),
  ),
});
export const CreateOrdersSchema = generateSchema(extendApi(ZCreateOrders));
export class CreateOrdersDto extends createZodDto(ZCreateOrders) {}
