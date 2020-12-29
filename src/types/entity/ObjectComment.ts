import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../User/user";
import { ObjectPost } from "./ObjectPost";

@Entity("comments")
@ObjectType()
export class ObjectComment extends BaseEntity {
  @Field(() => ObjectPost)
  @PrimaryGeneratedColumn("uuid")
  id!: ObjectPost;

  // @Field()
  // @ManyToOne("User", (user: User) => user.username)
  // user!: string;

  @Field()
  @Column({ nullable: true })
  body!: string;

  // @Field()
  // @ManyToOne('User', (user: User) => user.id)
  // @JoinTable()
  // ownerId!: string;

  @Field(() => ObjectPost)
  @ManyToOne(() => ObjectPost, (post: ObjectPost) => post.id)
  PostId!: ObjectPost;

  constructor(body?: string, post?: ObjectPost) {
    super();
    this.body = body!;
    this.PostId = post!;
  } 
}
