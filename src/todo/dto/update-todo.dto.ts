import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Category } from '../../category/model/category';

@InputType()
export class UpdateTodoDto {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  text: string;

  @Field({ nullable: true })
  isCompleted: boolean;

  @Field({ nullable: true })
  categoryId: number;
}
