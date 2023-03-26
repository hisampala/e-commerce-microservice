/* eslint-disable prettier/prettier */
import { PrismaClient as ProductsClient } from "../datastore/products";
import { PrismaClient as UsersClient, Users } from "../datastore/users";
import { hashSync } from "@node-rs/argon2";
async function main() {
  const contextUsers = new UsersClient();
  const RootUsers: Users = await contextUsers.users.create({
    data: {
      first_name: "User001",
      last_name: "User001",
      email: "user001@gmail.com",
      password: hashSync("123456"),
      Address: {
        create: {
          address: "99/99",
          district: "district",
          post_code: "99999",
          province: "province",
          subdistrict: "subdistrict",
        },
      },
      DeliveryAddress: {
        create: {
          address: "99/99",
          district: "district",
          post_code: "99999",
          province: "province",
          subdistrict: "subdistrict",
        },
      },
    },
  });
  console.log("on initail Users success");
  const contextProducts = new ProductsClient();
  const CreateProducts = await contextProducts.products.createMany({
    data: [
      {
        name: "ไข่ไก่",
        sku: "P001",
        bar_code: "858001",
        amount: 10,
        cost: 5,
        price: 8,
        user_create: RootUsers.id,
        user_update: RootUsers.id,
      },
      {
        name: "น้ำปลา",
        sku: "P002",
        bar_code: "858002",
        amount: 10,
        cost: 20,
        price: 29,
        user_create: RootUsers.id,
        user_update: RootUsers.id,
      },
      {
        name: "น้ำอัดลม",
        sku: "P003",
        bar_code: "858003",
        amount: 20,
        cost: 12,
        price: 20,
        user_create: RootUsers.id,
        user_update: RootUsers.id,
      },
      {
        name: "มาม่าซอง",
        sku: "P004",
        bar_code: "858004",
        amount: 20,
        cost: 8,
        price: 15,
        user_create: RootUsers.id,
        user_update: RootUsers.id,
      },
    ],
  });
  console.log("on initail Products success", CreateProducts.count);
}
main();
