import { Field, InputType } from "type-graphql";



@InputType()
export class UserArg {
    @Field()
    id!: number;

    @Field()
    firstName?: string;

    @Field()
    lastName?: string;

    @Field()
    email!: string;

    @Field()
    isActive?: boolean;

    @Field()
    password!: string;

    

}