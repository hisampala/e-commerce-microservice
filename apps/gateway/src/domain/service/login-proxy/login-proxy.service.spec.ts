import { Test, TestingModule } from "@nestjs/testing";
import { LoginProxyService } from "./login-proxy.service";

describe("LoginProxyService", () => {
  let service: LoginProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginProxyService],
    }).compile();

    service = module.get<LoginProxyService>(LoginProxyService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
