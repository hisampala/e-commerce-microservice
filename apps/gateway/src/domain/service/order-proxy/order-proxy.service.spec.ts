import { Test, TestingModule } from "@nestjs/testing";
import { OrderProxyService } from "./order-proxy.service";

describe("OrderProxyService", () => {
  let service: OrderProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderProxyService],
    }).compile();

    service = module.get<OrderProxyService>(OrderProxyService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
