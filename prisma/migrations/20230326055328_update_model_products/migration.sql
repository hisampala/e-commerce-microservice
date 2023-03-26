/*
  Warnings:

  - You are about to drop the `OrderDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_orderId_fkey";

-- DropTable
DROP TABLE "OrderDetail";

-- DropTable
DROP TABLE "Orders";

-- DropEnum
DROP TYPE "PaymentStatus";

-- DropEnum
DROP TYPE "StatusOrders";

-- CreateTable
CREATE TABLE "Products" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "cost" INTEGER NOT NULL DEFAULT 0,
    "price" INTEGER NOT NULL DEFAULT 0,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL,
    "user_create" TEXT NOT NULL,
    "user_update" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "StokProducts" (
    "_id" TEXT NOT NULL,
    "stock_code" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL,
    "user_create" TEXT NOT NULL,
    "user_update" TEXT NOT NULL,

    CONSTRAINT "StokProducts_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "StokProductsDetail" (
    "_id" TEXT NOT NULL,
    "stokProductsId" TEXT NOT NULL,
    "productsId" TEXT NOT NULL,
    "amont_new_stock" INTEGER NOT NULL,
    "cost_new" INTEGER NOT NULL,
    "amont_old_stock" INTEGER NOT NULL,
    "cost_old" INTEGER NOT NULL,

    CONSTRAINT "StokProductsDetail_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_name_key" ON "Products"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Products_sku_key" ON "Products"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Products_bar_code_key" ON "Products"("bar_code");

-- CreateIndex
CREATE INDEX "Products__id_name_sku_bar_code_user_create_idx" ON "Products"("_id", "name", "sku", "bar_code", "user_create");

-- CreateIndex
CREATE UNIQUE INDEX "StokProducts_stock_code_key" ON "StokProducts"("stock_code");

-- CreateIndex
CREATE UNIQUE INDEX "StokProducts__id_stock_code_user_create_key" ON "StokProducts"("_id", "stock_code", "user_create");

-- CreateIndex
CREATE UNIQUE INDEX "StokProductsDetail__id_stokProductsId_productsId_key" ON "StokProductsDetail"("_id", "stokProductsId", "productsId");

-- AddForeignKey
ALTER TABLE "StokProductsDetail" ADD CONSTRAINT "StokProductsDetail_stokProductsId_fkey" FOREIGN KEY ("stokProductsId") REFERENCES "StokProducts"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StokProductsDetail" ADD CONSTRAINT "StokProductsDetail_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
