/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeliveryAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusStockProducts" AS ENUM ('Draft', 'Complate', 'Restore', 'Cancle');

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_deliveryAddressId_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "DeliveryAddress";

-- DropTable
DROP TABLE "Users";

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
    "deleted_date" TIMESTAMP(3),
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "user_create" TEXT NOT NULL,
    "user_update" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "StokProducts" (
    "_id" TEXT NOT NULL,
    "stock_code" TEXT NOT NULL,
    "status" "StatusStockProducts" NOT NULL DEFAULT 'Draft',
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL,
    "user_crate" TEXT NOT NULL,
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
CREATE UNIQUE INDEX "StokProducts_stock_code_key" ON "StokProducts"("stock_code");

-- AddForeignKey
ALTER TABLE "StokProductsDetail" ADD CONSTRAINT "StokProductsDetail_stokProductsId_fkey" FOREIGN KEY ("stokProductsId") REFERENCES "StokProducts"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StokProductsDetail" ADD CONSTRAINT "StokProductsDetail_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
