import { Controller } from "@nestjs/common";
import {
  Ctx,
  MessagePattern,
  Payload,
  NatsContext,
} from "@nestjs/microservices";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersEvent } from "@common/core";
import { Logger } from "@nestjs/common";
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(UsersEvent.create_users)
  create(@Payload() createUserDto: CreateUserDto, @Ctx() context: NatsContext) {
    new Logger(UsersController.name).log(context.getArgs());
    return this.usersService.create(createUserDto);
  }

  @MessagePattern(UsersEvent.get_users)
  findAll(@Ctx() context: NatsContext) {
    new Logger(UsersController.name).log(context.getArgs());
    return this.usersService.findAll();
  }

  @MessagePattern(UsersEvent.get_users_by_Id)
  findOne(@Payload() id: string, @Ctx() context: NatsContext) {
    new Logger(UsersController.name).log(context.getArgs());
    return this.usersService.findOne(id);
  }

  @MessagePattern(UsersEvent.update_users)
  update(@Payload() updateUserDto: UpdateUserDto, @Ctx() context: NatsContext) {
    new Logger(UsersController.name).log(context.getArgs());
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern(UsersEvent.delelte_users)
  remove(@Payload() id: string, @Ctx() context: NatsContext) {
    new Logger(UsersController.name).log(context.getArgs());
    return this.usersService.remove(id);
  }
}
