import { ArgsType, Field } from "type-graphql";


@ArgsType()
export class InputComment {
    @Field()
    body!: string;

    @Field()
    Postid!: string;

}