import { IsEmail, Length } from "class-validator";
import { ArgsType, Field } from "type-graphql";
import { IsEmailAlreadyExist } from "../../validate/validateEmail";
import { IsUsernameAlreadyExist } from "../../validate/validateUsername";

@ArgsType()
export class UserArgs {
  @Field()
  @Length(1, 100)
  firstName!: string;

  @Field()
  @Length(1, 100)
  lastName!: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "email is already in use" })
  email!: string;

  @Field()
  password!: string;

  @Field()
  @IsUsernameAlreadyExist({ message: "username is already in use" })
  username!: string;
}
