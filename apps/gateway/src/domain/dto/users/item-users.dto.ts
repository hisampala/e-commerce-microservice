import { ApiProperty } from "@nestjs/swagger";
export class Address {
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
}
export class DeliveryAddress {
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
}

export class ItemUsers {
  @ApiProperty()
  id: string;
  @ApiProperty()
  fist_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  create_date: Date;
  @ApiProperty()
  update_date: Date;
  @ApiProperty()
  addressId: string;
  @ApiProperty()
  deliveryAddressId: string;
  @ApiProperty({ type: Address })
  Address: Address;
  @ApiProperty({ type: DeliveryAddress })
  deliveryAddress: DeliveryAddress;
}
