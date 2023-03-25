/*
  Warnings:

  - You are about to drop the column `status` on the `StokProducts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StokProducts" DROP COLUMN "status";

-- DropEnum
DROP TYPE "StatusStockProducts";
