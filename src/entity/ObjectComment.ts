import { Field, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { User } from "../User/user";
import { PostObjectType } from "../entity/ObjectPost";

@Entity()
@ObjectType()
export class ObjectComment {
    @Field()
    @ManyToOne('User', (user: User) => user.username)
    user!: string;

    @Field(() => String)
    @Column()
    body!: string;


    @ManyToOne('User', (user: User) => user.id)
    @JoinTable()
    ownerId!: string;

    @ManyToOne('PostObjectType', (post: PostObjectType) => post.id)
    @JoinTable()
    PostId!: string;
}