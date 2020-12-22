import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class LoginArgs {
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  username?: string;

  @Field()
  password!: string;
}
