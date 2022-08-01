import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.getCategories();
  }

  @Post()
  createCategory(@Body() createCategory: CreateCategoryDto) {
    console.log(createCategory);
    return this.categoryService.createCategory(createCategory);
  }
}
