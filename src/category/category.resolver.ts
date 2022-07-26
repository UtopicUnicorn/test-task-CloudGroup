import { Resolver, Query } from '@nestjs/graphql';
import { Category } from './model/category';
import { CategoryService } from './category.service';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category], { name: 'categories', nullable: 'items' })
  getCategories(): Category[] {
    return this.categoryService.getCategories();
  }
}
