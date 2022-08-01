import { Field, ObjectType } from '@nestjs/graphql';
import { Todo } from '../../todo/model/todo';
import { TodoEntity } from '../../todo/entities/todo.entity';

@ObjectType()
export class Category {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field(() => [Todo])
  todos?: Todo[];
}
