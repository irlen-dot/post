import { ArgsType, Field, InputType } from "type-graphql";
// import { PrimaryGeneratedColumn } from "typeorm";

// @Entity()
@ArgsType()
export class CreateCommentArgsType {
  @Field()
  description!: string;

  @Field()
  postId!: string;
}
