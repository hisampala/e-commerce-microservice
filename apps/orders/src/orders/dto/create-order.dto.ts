import { PaymentStatus, StatusOrders } from "@DataStore/Orders";
export class OrderDetailDto {
  id: string;
  productId: string;
  amount: number;
  price: number;
  cost: number;
  orderId: string;
}
export class CreateOrderDto {
  id: string;
  paymant: PaymentStatus;
  status: StatusOrders;
  remark: string;
  customerId: string;
  Detail: OrderDetailDto[];
}
