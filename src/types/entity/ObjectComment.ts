import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../User/user";
import { PostObjectType } from "./ObjectPost";

@Entity()
@ObjectType()
export class ObjectComment extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    // @ManyToOne(() => PostObjectType, commentId => commentId.comments)
    CommentId!: String;
    
    @Field()
    @ManyToOne('User', (user: User) => user.username)
    user!: string;

    @Field(() => String)
    @Column()
    body!: string;

    // @Field()
    // @ManyToOne('User', (user: User) => user.id)
    // @JoinTable()
    // ownerId!: string;

    // @Field()
    // @ManyToOne(()=> PostObjectType, post => post.id)
    // @JoinTable()
    // PostId!: string;

}   