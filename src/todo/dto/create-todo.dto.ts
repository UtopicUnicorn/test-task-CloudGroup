import { Field, ID, InputType } from '@nestjs/graphql';
import { Category } from '../../category/model/category';

@InputType()
export class CreateTodoDto {
  // @Field(() => ID)
  // id: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  isCompleted?: boolean;

  @Field()
  categoryId: number;
}
