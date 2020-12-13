import { Field, InputType } from "type-graphql";
// import { PrimaryGeneratedColumn } from "typeorm";

// @Entity()
@InputType()
export class CreatePostInput {
    
    @Field()
    description!: string;

    
}