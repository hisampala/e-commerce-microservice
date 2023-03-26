-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3),
    "addressId" TEXT,
    "deliveryAddressId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "subdistrict" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "post_code" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3),

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryAddress" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "subdistrict" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "post_code" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(3),

    CONSTRAINT "DeliveryAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE INDEX "Users_first_name_last_name_email_idx" ON "Users"("first_name", "last_name", "email");

-- CreateIndex
CREATE INDEX "Address_address_subdistrict_district_province_post_code_idx" ON "Address"("address", "subdistrict", "district", "province", "post_code");

-- CreateIndex
CREATE INDEX "DeliveryAddress_address_subdistrict_district_province_post__idx" ON "DeliveryAddress"("address", "subdistrict", "district", "province", "post_code");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_deliveryAddressId_fkey" FOREIGN KEY ("deliveryAddressId") REFERENCES "DeliveryAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;
