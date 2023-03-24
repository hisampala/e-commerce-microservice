/*
  Warnings:

  - You are about to drop the column `fist_name` on the `Users` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_fist_name_last_name_email_idx";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "fist_name",
ADD COLUMN     "first_name" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Users_first_name_last_name_email_idx" ON "Users"("first_name", "last_name", "email");
