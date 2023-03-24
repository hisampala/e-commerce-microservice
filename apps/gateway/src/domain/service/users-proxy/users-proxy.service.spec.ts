import { Test, TestingModule } from "@nestjs/testing";
import { UsersProxyService } from "./users-proxy.service";

describe("UsersProxyService", () => {
  let service: UsersProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersProxyService],
    }).compile();

    service = module.get<UsersProxyService>(UsersProxyService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
