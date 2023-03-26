import { PrismaClient } from "@DataStore/Users";
import { BadRequestException, Injectable } from "@nestjs/common";
import { verify, verifySync } from "@node-rs/argon2";
import { AuthService } from "@common/core";
import { Login } from "./dto/login";
import { TokenItem } from "./dto/token-item";

@Injectable()
export class AuthenticationService {
  constructor(
    private context: PrismaClient,
    private readonly AuthServce: AuthService,
  ) {}
  async Auth(item: Login) {
    const user = await this.context.users.findUnique({
      where: {
        email: item.email,
      },
      select: { id: true, password: true },
    });
    if (!user) {
      return new BadRequestException("Nofount Email");
    }
    const verifyPassword = await verify(user.password, item.password);
    if (!verifyPassword) {
      return new BadRequestException("Password is incorrect");
    }
    const token = {} as TokenItem;
    token.jwt = await this.AuthServce.genToken({ userId: user.id });
    return token;
  }
}
