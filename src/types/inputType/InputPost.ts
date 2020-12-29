import { ArgsType, Field, InputType } from "type-graphql";
// import { PrimaryGeneratedColumn } from "typeorm";

// @Entity()
@ArgsType()
export class CreatePostInput {
  @Field()
  ownerId!: string;


  @Field()
  description!: string;
}
