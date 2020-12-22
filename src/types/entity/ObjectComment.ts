import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../User/user";
import { PostObjectType } from "./ObjectPost";

@Entity()
@ObjectType()
export class ObjectComment extends BaseEntity{

    @Field(() => PostObjectType)
    @PrimaryGeneratedColumn("uuid")
    @ManyToOne(() => PostObjectType, (commentId: PostObjectType) => commentId.comments)
    @JoinColumn()
    CommentId!: PostObjectType;
    
    @Field()
    @ManyToOne('User', (user: User) => user.username)
    user!: string;

    @Field()
    @Column()
    body!: string;

    // @Field()
    // @ManyToOne('User', (user: User) => user.id)
    // @JoinTable()
    // ownerId!: string;

    @Field(() => PostObjectType)
    @ManyToOne(()=> PostObjectType, (post: PostObjectType) => post.id)
    PostId!: PostObjectType;

}   