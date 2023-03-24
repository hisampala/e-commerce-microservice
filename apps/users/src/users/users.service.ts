import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@DataStore/Users";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
const UsersOption: Prisma.UsersFindManyArgs = {
  include: { Address: true, DeliveryAddress: true },
};
@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const context = new PrismaClient();
    await context.$connect();
    const result = await context.users.create({
      data: {
        Address: {
          create: createUserDto.address,
        },
        DeliveryAddress: {
          create: createUserDto.deliveryAddress,
        },
        first_name: createUserDto.first_name,
        last_name: createUserDto.last_name,
        email: createUserDto.email,
        password: createUserDto.password,
      },
      include: UsersOption.include,
    });
    delete result.password;
    return result;
  }

  async findAll() {
    const context = new PrismaClient();
    await context.$connect();
    return await (
      await context.users.findMany({ include: UsersOption.include })
    ).map((users) => {
      delete users.password;
      return users;
    });
  }

  async findOne(id: string) {
    const context = new PrismaClient();
    await context.$connect();
    const result = await context.users.findUnique({
      where: { id: id },
      include: UsersOption.include,
    });
    if (!result) return null;
    delete result.password;
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const context = new PrismaClient();
    await context.$connect();
    const result = await context.users.update({
      where: {
        id: id,
      },
      data: {
        Address: {
          update: updateUserDto.address,
        },
        DeliveryAddress: {
          update: updateUserDto.deliveryAddress,
        },
        first_name: updateUserDto.first_name,
        last_name: updateUserDto.last_name,
      },
      include: UsersOption.include,
    });
    delete result.password;
    return result;
  }

  async remove(id: string) {
    const context = new PrismaClient();
    await context.$connect();
    const result = await context.users.delete({
      where: { id: id },
      include: UsersOption.include,
    });
    delete result.password;
    return result;
  }
}
