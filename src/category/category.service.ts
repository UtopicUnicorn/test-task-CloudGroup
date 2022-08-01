import { Injectable } from '@nestjs/common';
import { Category } from './model/category';
import { CategoryEntity } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from '../todo/dto/create-todo.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryEntity: Repository<CategoryEntity>,
  ) {}

  async getCategories(): Promise<CategoryEntity[]> {
    return await this.categoryEntity.find({ relations: { todos: true } });
  }

  async createCategory(
    createCategory: CreateCategoryDto,
  ): Promise<CategoryEntity> {
    return await this.categoryEntity.save(createCategory);
  }

  async getCategory(id: number): Promise<CategoryEntity> {
    return await this.categoryEntity.findOneBy({ id: id });
  }

  async updateCategory(
    updateCategory: UpdateCategoryDto,
  ): Promise<CategoryEntity> {
    await this.categoryEntity.update(
      { id: updateCategory.id },
      { ...updateCategory },
    );
    return await this.getCategory(updateCategory.id);
  }

  async removeCategory(id: number): Promise<number> {
    await this.categoryEntity.delete({ id });
    return id;
  }
  // async createCategory(category: Category): Promise<CategoryEntity> {
  //   return await this.categoryEntity.save({ ...category });
  // }
}
