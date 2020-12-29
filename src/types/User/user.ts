import { Field, ID, ObjectType, Root } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { followers } from "../entity/ObjectFollowers";
import { ObjectPost } from "../entity/ObjectPost";



@Entity("users")
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field()
  @Column("text", { unique: true })
  email!: string;

  // @Field()
  @Column()
  password!: string;  

  @Field()
  @Column()
  username!: string;

  @Field()
  @Column({ nullable: true })
  token!: string;

  @OneToMany(() => ObjectPost, (post: ObjectPost) => post.user)
  @JoinColumn()
  post!: ObjectPost[];

  // @Field({ nullable: true })
  // @Column({ nullable: true })
  // followers?: Number;

  // @ManyToMany(() => User)
  // @JoinTable()
  // followersInfo?: User[];

  @OneToMany(() => followers, fol => fol.userId_2)
  followers!: followers[];

  @Column({ nullable: true })
  follower_num?: Number;  

  // @Column({nullable: true})
  // followed_info?: String[];
  
}
