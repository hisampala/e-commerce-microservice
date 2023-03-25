import { Injectable, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@DataStore/Users";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
const UsersOption: Prisma.UsersFindManyArgs = {
  include: { Address: true, DeliveryAddress: true },
};
@Injectable()
export class UsersService implements OnModuleInit {
  constructor(private context: PrismaClient) {}
  onModuleInit() {
    this.context.$connect();
  }
  async create(createUserDto: CreateUserDto) {
    try {
      const result = await this.context.users.create({
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
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await (
        await this.context.users.findMany({ include: UsersOption.include })
      ).map((users) => {
        delete users.password;
        return users;
      });
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    const result = await this.context.users.findUnique({
      where: { id: id },
      include: UsersOption.include,
    });
    if (!result) return null;
    delete result.password;
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const result = await this.context.users.update({
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
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const result = await this.context.users.delete({
        where: { id: id },
        include: UsersOption.include,
      });
      delete result.password;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
