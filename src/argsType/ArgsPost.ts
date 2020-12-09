// import { isInputObjectType } from "graphql";
import { ArgsType, Field, ID, InputType } from "type-graphql";
// import { Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity()
@ArgsType()
export class CreatePostArgs {
    @Field()
    // @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    description!: string;

    @Field()
    comments?: number;

    @Field()
    likes?: number;

    @Field({ nullable: true })
    ownerId?: number;

    @Field()
    isActive!: boolean;
}

