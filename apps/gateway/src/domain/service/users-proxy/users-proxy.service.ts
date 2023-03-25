import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Provide, UsersEvent } from "@common/core";
import { firstValueFrom } from "rxjs";
import { CreateUsersDto } from "../../dto/users/create-users.dto";
import { UpdateUsersDto } from "../../dto/users/update-users.dto";
import { ItemUsers } from "../../dto/users/item-users.dto";
import { BadRequestException } from "@nestjs/common";
import { NatsConnectionImpl } from "nats/lib/nats-base-client/nats";
export interface IUsersProxyService {
  CreateUsers(item: CreateUsersDto): Promise<ItemUsers>;
  UpdateUsers(id: string, item: UpdateUsersDto): Promise<ItemUsers>;
  DeleteUsers(id: string): Promise<ItemUsers>;
  GetAllUsers(): Promise<ItemUsers[]>;
  GetUsersById(id: string): Promise<ItemUsers>;
}
@Injectable()
export class UsersProxyService implements IUsersProxyService {
  constructor(
    @Inject(Provide.Users) private readonly usersClient: ClientProxy,
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
}
