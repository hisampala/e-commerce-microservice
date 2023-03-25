/*
  Warnings:

  - You are about to drop the column `user_crate` on the `StokProducts` table. All the data in the column will be lost.
  - Added the required column `user_create` to the `StokProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StokProducts" DROP COLUMN "user_crate",
ADD COLUMN     "user_create" TEXT NOT NULL;
