import { Injectable } from '@nestjs/common';
import { Todo } from './model/todo';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoEntity: Repository<TodoEntity>,
  ) {}

  async getTodos(): Promise<TodoEntity[]> {
    return await this.todoEntity.find();
  }

  async createTodo(createTodo: CreateTodoDto): Promise<TodoEntity> {
    return await this.todoEntity.save(createTodo);
  }

  async getOneTodo(id: number): Promise<TodoEntity> {
    return await this.todoEntity.findOneBy({ id: id });
  }

  async removeTodo(id: number): Promise<number> {
    await this.todoEntity.delete({ id });
    return id;
  }

  async updateTodo(updateTodo: UpdateTodoDto): Promise<TodoEntity> {
    await this.todoEntity.update({ id: updateTodo.id }, updateTodo);
    return await this.getOneTodo(updateTodo.id);
  }

  // public getTodos(): Todo[] {
  //   return this.todos;
  // }
}
