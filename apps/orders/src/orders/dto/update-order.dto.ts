import { PaymentStatus, StatusOrders } from "@DataStore/Orders";
import { OrderDetailDto } from "./create-order.dto";

export class UpdateOrderDto {
  id: string;
  paymant: PaymentStatus;
  status: StatusOrders;
  remark: string;
  Detail: OrderDetailDto[];
}
