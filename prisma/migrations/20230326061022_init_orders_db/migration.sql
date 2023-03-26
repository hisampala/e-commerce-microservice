-- CreateEnum
CREATE TYPE "StatusOrders" AS ENUM ('Draf', 'Completed', 'Cancle', 'Refund');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Cash', 'BaskTranfer', 'CreditCard');

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "paymant" "PaymentStatus" NOT NULL,
    "status" "StatusOrders" NOT NULL DEFAULT 'Draf',
    "remark" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderDetail" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "cost" INTEGER,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "OrderDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Orders_id_paymant_status_customerId_idx" ON "Orders"("id", "paymant", "status", "customerId");

-- CreateIndex
CREATE INDEX "OrderDetail_id_productId_orderId_idx" ON "OrderDetail"("id", "productId", "orderId");

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
