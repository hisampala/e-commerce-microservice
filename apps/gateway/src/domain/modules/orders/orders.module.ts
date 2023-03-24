import { Module } from "@nestjs/common";
import { CommonModule } from "@common/core";
@Module({ imports: [CommonModule] })
export class OrdersModule {}
