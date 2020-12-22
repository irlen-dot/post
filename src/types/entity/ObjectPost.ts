import { ObjectType, ID, Field } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../User/user";
import { ObjectComment } from "./ObjectComment";
  
@Entity()
@ObjectType()
export class PostObjectType extends BaseEntity {
    
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: String;
  
    @Field()
    @Column({type: "text"})
    description!: string;
  

    @OneToMany(() => ObjectComment, (comments: ObjectComment) => comments.CommentId)
    comments!: ObjectComment[];
  
    @Field()
    @Column()
    likes?: number;
  
  
    @Field()
    @Column()
    isActive!: boolean;
  
    @Column({ nullable: true })
    @ManyToOne('User', (user: User) => user.id)
    ownerId?: string;
    
    @Column({ nullable: true })
    @ManyToOne('User', (user: User) => user.posts)
    user?: string;
    
}