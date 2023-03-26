import { z } from "zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { createZodDto } from "@anatine/zod-nestjs";
const ZCompleteOrders = z.object({
  id: z.string().uuid(),
  status: z.enum(["Cancle"]).default("Cancle"),
  remark: z.string(),
});
export const CancleOrdersSchema = generateSchema(extendApi(ZCompleteOrders));
export class CancleOrdersDto extends createZodDto(ZCompleteOrders) {}
