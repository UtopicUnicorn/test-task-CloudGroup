import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './model/todo';
import { TodoService } from './todo.service';
import { TodoEntity } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CategoryEntity } from '../category/entities/category.entity';
import { CategoryService } from '../category/category.service';
import { Category } from "../category/model/category";

@Resolver(() => Todo)
export class TodoResolver {
  constructor(
    private readonly todoService: TodoService,
    private readonly categoryService: CategoryService,
  ) {}

  @Query(() => [Todo], { name: 'todos', nullable: 'items' })
  getTodos(): Promise<TodoEntity[]> {
    return this.todoService.getTodos();
  }

  // @Mutation(() => Todo)
  // async createTodo(
  //   @Args('createTodo') createTodo: CreateTodoDto,
  // ): Promise<TodoEntity> {
  //   return await this.todoService.createTodo(createTodo);
  // }

  @Mutation(() => Category)
  async createTodo(categoryName: string, text: string): Promise<TodoEntity> {
    let category;
    await this.categoryService
      .createCategory({ title: categoryName })
      .then((resp) => (category = resp));
    return await this.todoService.createTodo({
      text: text,
      categoryId: category,
    });
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Args('updateTodo') updateTodo: UpdateTodoDto,
  ): Promise<TodoEntity> {
    return await this.todoService.updateTodo(updateTodo);
  }

  @Mutation(() => Todo)
  async removeTodo(@Args('id') id: number): Promise<number> {
    return await this.todoService.removeTodo(id);
  }

  @Query(() => Todo)
  async getOneTodo(@Args('id') id: number): Promise<TodoEntity> {
    return this.todoService.getOneTodo(id);
  }
}
