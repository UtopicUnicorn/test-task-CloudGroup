import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.getTodos();
  }

  @Patch()
  updateStatus(@Body() updateTodo: UpdateTodoDto) {
    return this.todoService.updateTodo(updateTodo);
  }

  @Post()
  createTodo(@Body() createTodo: CreateTodoDto) {
    console.log('here');
    return this.todoService.createTodo(createTodo);
  }
}
