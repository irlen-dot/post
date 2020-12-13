import { Field, InputType } from "type-graphql";


@InputType()
export class InputSearch {
    @Field()
    description?: string;
    static description: any;
}