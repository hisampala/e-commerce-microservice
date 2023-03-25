import { Test, TestingModule } from "@nestjs/testing";
import { ProductsProxyService } from "./products-proxy.service";

describe("ProductsProxyService", () => {
  let service: ProductsProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsProxyService],
    }).compile();

    service = module.get<ProductsProxyService>(ProductsProxyService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
