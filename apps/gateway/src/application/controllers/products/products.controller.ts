import { ZodValidationPipe } from "@anatine/zod-nestjs";
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import {
  ControllerPath,
  GetUserId,
  JwtAuthGuard,
  ServiceProxy,
} from "../../../../../../libs/common/src";
import { CreateProductsDto } from "../../../domain/dto/products/create-products";
import { UpdateProductsDto } from "../../../domain/dto/products/update-products";
import { CreateProductsSchema } from "../../../domain/dto/products/create-products";
import { ItemProducts } from "../../../domain/dto/products/item-products";
import { UpdateProductsSchema } from "../../../domain/dto/products/update-products";
import { IProductsProxyService } from "../../../domain/service/products-proxy/products-proxy.service";
import {
  CreateStockProductsDto,
  CreateStockProductsSchema,
} from "../../../domain/dto/products/stock/create-stock";
import { ItemStock } from "../../../domain/dto/products/stock/item-stock";

@Controller(ControllerPath.Products)
@ApiTags("Products")
@UsePipes(ZodValidationPipe)
export class ProductsController {
  constructor(
    @Inject(ServiceProxy.Products)
    private readonly service: IProductsProxyService,
  ) {}
  @Get()
  @ApiBearerAuth()
  @ApiResponse({ type: ItemProducts, isArray: true })
  @UseGuards(JwtAuthGuard)
  async getAll() {
    return this.service.GetAllProducts();
  }
  @Get(":id")
  @ApiBearerAuth()
  @ApiResponse({ type: ItemProducts })
  @UseGuards(JwtAuthGuard)
  async getById(@Param("id") id: string) {
    return this.service.GetProductsById(id);
  }
  @Post()
  @ApiBearerAuth()
  @ApiResponse({ type: ItemProducts })
  @ApiBody({ schema: CreateProductsSchema })
  @UseGuards(JwtAuthGuard)
  async create(@Body() item: CreateProductsDto, @GetUserId() userId: string) {
    item["user_create"] = userId;
    return this.service.CreateProducts(item);
  }
  @Put(":id")
  @ApiBearerAuth()
  @ApiResponse({ type: ItemProducts })
  @ApiBody({ schema: UpdateProductsSchema })
  @UseGuards(JwtAuthGuard)
  async update(
    @Param("id") id: string,
    @Body() item: UpdateProductsDto,
    @GetUserId() userId: string,
  ) {
    item["user_update"] = userId;
    return this.service.UpdateProducts(id, item);
  }
  @Delete(":id")
  @ApiBearerAuth()
  @ApiResponse({ type: ItemProducts })
  @UseGuards(JwtAuthGuard)
  async delete(@Param("id") id: string) {
    return this.service.DeleteProducts(id);
  }
  @Post("stock")
  @ApiBearerAuth()
  @ApiBody({ schema: CreateStockProductsSchema })
  @ApiResponse({ type: ItemStock })
  @ApiTags("Stock")
  @UseGuards(JwtAuthGuard)
  async stock(
    @Body() item: CreateStockProductsDto,
    @GetUserId() userId: string,
  ) {
    item["user_create"] = userId;
    return this.service.CreatStockProducts(item);
  }
  @Get(":id/stock")
  @ApiBearerAuth()
  @ApiResponse({ type: ItemStock, isArray: true })
  @UseGuards(JwtAuthGuard)
  async stockProducts(@Param("id") id: string) {
    return this.service.GetProductsStock(id);
  }
}
