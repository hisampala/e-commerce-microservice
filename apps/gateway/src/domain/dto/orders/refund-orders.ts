import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
const ZCompleteOrders = z.object({
  id: z.string().uuid(),
  status: z.enum(["Refund"]).default("Refund"),
  remark: z.string(),
});
export const RefundOrdersSchema = generateSchema(extendApi(ZCompleteOrders));
export class RefundOrdersDto extends createZodDto(ZCompleteOrders) {}
