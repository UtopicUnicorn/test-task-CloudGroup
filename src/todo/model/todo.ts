import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => ID)
  id: number;

  @Field()
  text: string;

  @Field()
  isCompleted?: boolean;

  @Field()
  categoryId: number;
}
