import { ArgsType, Field, InputType } from "type-graphql";
// import { PrimaryGeneratedColumn } from "typeorm";

// @Entity()
@ArgsType()
export class CreatePostArgsType {
  @Field()
  description!: string;
}
