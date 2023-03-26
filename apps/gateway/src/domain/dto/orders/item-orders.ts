import { ApiProperty } from "@nestjs/swagger";
import { ItemProducts } from "../products/item-products";
class Address {
  @ApiProperty()
  id: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  subdistrict: string;
  @ApiProperty()
  district: string;
  @ApiProperty()
  province: string;
  @ApiProperty()
  post_code: string;
  @ApiProperty()
  create_date: Date;
  @ApiProperty()
  update_date: Date;
}
class DeliveryAddress {
  @ApiProperty()
  id: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  subdistrict: string;
  @ApiProperty()
  district: string;
  @ApiProperty()
  province: string;
  @ApiProperty()
  post_code: string;
  @ApiProperty()
  create_date: Date;
  @ApiProperty()
  update_date: Date;
}
class Customer {
  @ApiProperty()
  id: string;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  create_date: Date;
  @ApiProperty()
  update_date: Date;
  @ApiProperty({ type: Address })
  Address: Address;
  @ApiProperty({ type: DeliveryAddress })
  DeliveryAddress: DeliveryAddress;
}
class Detail {
  @ApiProperty()
  id: string;
  @ApiProperty()
  productId: string;
  @ApiProperty({ type: ItemProducts })
  Product: ItemProducts;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  cost: number;
  @ApiProperty()
  orderId: string;
}
export class ItemOrders {
  @ApiProperty()
  id: string;
  @ApiProperty()
  paymant: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  remark: string;
  @ApiProperty()
  customerId: string;
  @ApiProperty()
  Customer: Customer;
  @ApiProperty()
  total_price: number;
  @ApiProperty()
  total_amount: number;
  @ApiProperty()
  totol_product_count: number;
  @ApiProperty({ type: Detail, isArray: true })
  Detail: Detail[];
}
