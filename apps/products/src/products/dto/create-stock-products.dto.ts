class StokcProductDetail {
  id: string;
  stokProductsId: string;
  productsId: string;
  amont_new_stock: number;
  cost_new: number;
  amont_old_stock: number;
  cost_old: number;
}
export class CreateStockProductDto {
  id: string;
  stock_code: string;
  create_date: Date;
  update_date: Date;
  user_create: string;
  user_update: string;
  Detail: StokcProductDetail[];
}
