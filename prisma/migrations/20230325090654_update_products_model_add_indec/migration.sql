/*
  Warnings:

  - A unique constraint covering the columns `[_id,stock_code,user_create]` on the table `StokProducts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[_id,stokProductsId,productsId]` on the table `StokProductsDetail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Products__id_name_sku_bar_code_user_create_idx" ON "Products"("_id", "name", "sku", "bar_code", "user_create");

-- CreateIndex
CREATE UNIQUE INDEX "StokProducts__id_stock_code_user_create_key" ON "StokProducts"("_id", "stock_code", "user_create");

-- CreateIndex
CREATE UNIQUE INDEX "StokProductsDetail__id_stokProductsId_productsId_key" ON "StokProductsDetail"("_id", "stokProductsId", "productsId");
