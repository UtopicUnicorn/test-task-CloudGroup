import { Injectable } from '@nestjs/common';
import { Category } from './model/category';

@Injectable()
export class CategoryService {
  private categories: Category[] = [{ id: '1010', title: 'test' }, {id: '1011', title: 'test2'}];

  public getCategories(): Category[] {
    return this.categories;
  }
}
