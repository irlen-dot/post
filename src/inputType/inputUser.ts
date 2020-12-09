import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "../validate/validate";


@InputType()
export class UserInput {
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


    
}