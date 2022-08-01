import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity('todos')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column('boolean', { default: false })
  isCompleted: boolean;

  @Column()
  categoryId: number;

  @ManyToOne(() => CategoryEntity, (category) => category.todos)
  category: CategoryEntity;
}
