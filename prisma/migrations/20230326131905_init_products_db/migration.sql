/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeliveryAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_deliveryAddressId_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "DeliveryAddress";

-- DropTable
DROP TABLE "OrderDetail";

-- DropTable
DROP TABLE "Orders";

-- DropTable
DROP TABLE "Users";

-- DropEnum
DROP TYPE "PaymentStatus";

-- DropEnum
DROP TYPE "StatusOrders";
