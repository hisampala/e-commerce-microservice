import { ApiProperty } from "@nestjs/swagger";

export class TokenJwt {
  @ApiProperty()
  jwt: string;
}
