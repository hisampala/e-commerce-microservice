import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { LoginEvent, Provide } from "../../../../../../libs/common/src";
import { LoginDto } from "../../dto/login/login.dto";
import { TokenJwt } from "../../dto/login/token-jwt.dto";
export interface ILoginProxyService {
  OnLogin(item: LoginDto): Promise<TokenJwt>;
}
@Injectable()
export class LoginProxyService implements ILoginProxyService {
  constructor(
    @Inject(Provide.login) private readonly loginClient: ClientProxy,
  ) {}
  async OnLogin(item: LoginDto): Promise<TokenJwt> {
    try {
      const result = await firstValueFrom<TokenJwt>(
        this.loginClient.send(LoginEvent.login, item),
      );
      return result;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
}
