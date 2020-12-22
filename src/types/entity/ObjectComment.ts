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
import { PostObjectType } from "./ObjectPost";

@Entity("comment")
@ObjectType()
export class ObjectComment extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  body!: string;

  @Field(() => PostObjectType)
  @ManyToOne(() => PostObjectType, (post: PostObjectType) => post.comments)
  post?: PostObjectType;

  constructor(body?: string, post?: PostObjectType) {
    super();
    this.body = body || "";
    this.post = post;
  }
}
