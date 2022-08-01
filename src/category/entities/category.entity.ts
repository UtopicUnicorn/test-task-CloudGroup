import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TodoEntity } from '../../todo/entities/todo.entity';
import { Todo } from '../../todo/model/todo';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => TodoEntity, (todo) => todo.category)
  todos: Todo[];

  // @ManyToOne(() => TodoEntity, (todo) => todo.id)
  // @JoinColumn({ name: 'todo_id' })
  // todos: TodoEntity[];
}
