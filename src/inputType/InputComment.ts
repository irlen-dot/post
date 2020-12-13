import { Field, InputType } from "type-graphql";


@InputType()
export class InputComment {
    @Field()
    body!: string;



}