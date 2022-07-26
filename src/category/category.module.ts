import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryResolver } from './category.resolver';

@Module({
  providers: [CategoryService, CategoryResolver],
  controllers: [CategoryController],
})
export class CategoryModule {}
