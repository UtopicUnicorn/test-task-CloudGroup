import { Module } from '@nestjs/common';
import { TodoResolver } from './todo.resolver';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { CategoryService } from '../category/category.service';
import { CategoryEntity } from '../category/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity, CategoryEntity])],
  providers: [TodoResolver, TodoService, CategoryService],
  controllers: [TodoController],
})
export class TodoModule {}

