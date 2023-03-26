import { ApiProperty } from "@nestjs/swagger";

class StokcProductDetail {
  @ApiProperty()
  id: string;
  @ApiProperty()
  stokProductsId: string;
  @ApiProperty()
  productsId: string;
  @ApiProperty()
  amont_new_stock: number;
  @ApiProperty()
  cost_new: number;
  @ApiProperty()
  amont_old_stock: number;
  @ApiProperty()
  cost_old: number;
}
export class ItemStock {
  @ApiProperty()
  stock_code: string;
  @ApiProperty()
  create_date: Date;
  @ApiProperty()
  update_date: Date;
  @ApiProperty()
  user_create: string;
  @ApiProperty()
  user_update: string;
  @ApiProperty({ type: StokcProductDetail, isArray: true })
  Detail: StokcProductDetail[];
}
