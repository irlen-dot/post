import { Field, InputType } from "type-graphql";
// import { PrimaryGeneratedColumn } from "typeorm";

// @Entity()
@InputType()
export class CreatePostInput {
    @Field()
    // @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    description!: string;

    @Field({nullable: true})
    comments?: number;

    @Field()
    likes?: number;

    @Field()
    ownerId!: number;

    @Field()
    isActive!: boolean;
}