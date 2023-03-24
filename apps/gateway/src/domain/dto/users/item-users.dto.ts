import { ApiProperty } from "@nestjs/swagger";

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
}
