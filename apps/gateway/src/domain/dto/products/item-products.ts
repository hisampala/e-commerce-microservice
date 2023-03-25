import { ApiProperty } from "@nestjs/swagger";

export class ItemProducts {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  sku: string;
  @ApiProperty()
  bar_code: string;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  cost: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  create_date: Date;
  @ApiProperty()
  update_date: Date;
  @ApiProperty()
  user_create: string;
  @ApiProperty()
  user_update: string;
}
