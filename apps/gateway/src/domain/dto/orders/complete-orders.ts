import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
const ZCompleteOrders = z.object({
  id: z.string().uuid(),
  status: z.enum(["Completed"]).default("Completed"),
  remark: z.string(),
});
export const CompleteOrdersSchema = generateSchema(extendApi(ZCompleteOrders));
export class CompleteOrdersDto extends createZodDto(ZCompleteOrders) {}
