import { Injectable, Logger } from "@nestjs/common";
import { ExtractJwt, JwtFromRequestFunction, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

import { Request } from "express";
import { TokenJwt } from "./token-jwt";
@Injectable()
export class AuthService extends PassportStrategy(Strategy, "jwt") {
  private logger = new Logger(AuthService.name);
  constructor(
    private readonly configService: ConfigService<{ JWT_SECRET: string }>,
    private jwtService: JwtService,
  ) {
    const jwtExtractor: JwtFromRequestFunction = (
      req: Request,
    ): string | null => {
      try {
        const jwt = req.headers.authorization.split("Bearer ")[1];
        return jwt;
      } catch (error) {
        return null;
      }
    };
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([jwtExtractor]),
      ignoreExpiration: false,
      secretOrKey: configService.get("JWT_SECRET"),
    });
  }
  async validate(payload: any) {
    return payload;
  }
  async genToken(item: TokenJwt) {
    return await this.jwtService.sign(JSON.stringify(item), {
      secret: this.configService.get("JWT_SECRET"),
    });
  }
}
