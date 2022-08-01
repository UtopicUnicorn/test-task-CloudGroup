import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Category } from './model/category';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category], { name: 'categories', nullable: 'items' })
  getCategories(): Promise<CategoryEntity[]> {
    return this.categoryService.getCategories();
  }

  @Query(() => Category)
  async getOneCategory(@Args('id') id: number): Promise<CategoryEntity> {
    return this.categoryService.getCategory(id);
  }

  @Mutation(() => Category)
  async createCategory(
    @Args('createCategory') createCategory: CreateCategoryDto,
  ): Promise<CategoryEntity> {
    return await this.categoryService.createCategory(createCategory);
  }
}
