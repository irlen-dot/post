import { ObjectType, ID, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../User/user";
import { ObjectComment } from "./ObjectComment";

@Entity("Posts")
@ObjectType()
export class ObjectPost extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  // @OneToMany(() => ObjectComment, (com: ObjectComment) => com.PostId)
  id!: String;

  @Field()
  @Column({ type: "text" })
  description!: string;

  @OneToMany(
    () => ObjectComment,
    (comments: ObjectComment) => comments.id
  )
  @JoinColumn()
  comments!: ObjectComment[];

  // @Field()
  // @Column()
  // likes?: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  isActive?: boolean;

  @Field()
  @ManyToOne(() => User, (user: User) => user.post)
  @JoinColumn()
  user!: String;

  @Field()
  @Column({ nullable: true})
  username!: String;

  constructor(description?: string, user?: String) {
    super()
    this.description = description!;
    this.user = user!;
  }
}
