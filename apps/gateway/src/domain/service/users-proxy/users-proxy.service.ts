import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { OrderEvent, Provide, UsersEvent } from "@common/core";
import { firstValueFrom } from "rxjs";
import { CreateUsersDto } from "../../dto/users/create-users.dto";
import { UpdateUsersDto } from "../../dto/users/update-users.dto";
import { ItemUsers } from "../../dto/users/item-users.dto";
import { BadRequestException } from "@nestjs/common";
import { ItemOrders } from "../../dto/orders/item-orders";
export interface IUsersProxyService {
  CreateUsers(item: CreateUsersDto): Promise<ItemUsers>;
  UpdateUsers(id: string, item: UpdateUsersDto): Promise<ItemUsers>;
  DeleteUsers(id: string): Promise<ItemUsers>;
  GetAllUsers(): Promise<ItemUsers[]>;
  GetUsersById(id: string): Promise<ItemUsers>;
  GetOrders(id: string): Promise<ItemOrders[]>;
}
@Injectable()
export class UsersProxyService implements IUsersProxyService {
  constructor(
    @Inject(Provide.Users) private readonly usersClient: ClientProxy,
    @Inject(Provide.orders) private readonly ordersClient: ClientProxy,
  ) {}

  async CreateUsers(item: CreateUsersDto): Promise<ItemUsers> {
    try {
      const result = await firstValueFrom<ItemUsers>(
        this.usersClient.send(UsersEvent.create_users, item),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  async UpdateUsers(id: string, item: UpdateUsersDto): Promise<ItemUsers> {
    try {
      const user = await firstValueFrom<ItemUsers>(
        this.usersClient.send(UsersEvent.get_users_by_Id, id),
      );
      if (!user) {
        throw new BadRequestException(`Notfount User Id :${id}`);
      }
      const result = await firstValueFrom<ItemUsers>(
        this.usersClient.send(UsersEvent.update_users, item),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  async DeleteUsers(id: string): Promise<ItemUsers> {
    try {
      const user = await firstValueFrom<ItemUsers>(
        this.usersClient.send(UsersEvent.get_users_by_Id, id),
      );
      if (!user) {
        throw new BadRequestException(`Notfount User Id :${id}`);
      }
      const result = await firstValueFrom<ItemUsers>(
        this.usersClient.send(UsersEvent.delelte_users, id),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  async GetAllUsers(): Promise<ItemUsers[]> {
    try {
      const result = await firstValueFrom<ItemUsers[]>(
        this.usersClient.send(UsersEvent.get_users, {}),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  async GetUsersById(id: string): Promise<ItemUsers> {
    try {
      const result = await firstValueFrom<ItemUsers>(
        this.usersClient.send(UsersEvent.get_users_by_Id, id),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  async GetOrders(id: string): Promise<ItemOrders[]> {
    try {
      const result = await firstValueFrom<ItemOrders[]>(
        this.usersClient.send(OrderEvent.get_Orders_Customer, id),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}
