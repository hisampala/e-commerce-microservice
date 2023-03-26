import { PaymentStatus, StatusOrders } from "@DataStore/Orders";
import { ItemCustomer } from "./customer-item.dto";

class Detail {
  id: string;
  productId: string;
  name: string;
  amount: number;
  price: number;
  orderId: string;
}
export class ItemOrders {
  id: string;
  paymant: PaymentStatus;
  status: StatusOrders;
  remark: string;
  customerId: string;
  Customer: ItemCustomer;
  total_price: number;
  total_amount: number;
  totol_product_count: number;
  Detail: Detail[];
}
