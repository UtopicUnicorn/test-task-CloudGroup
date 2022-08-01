import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryDto {
  @Field()
  title: string;
}
