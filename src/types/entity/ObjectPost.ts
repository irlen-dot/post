import { ObjectType, ID, Field } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../User/user";
import {  } from "module";
 
@Entity()
@ObjectType()
export class PostObjectType extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id!: number;
 
    @Field()
    @Column({type: "text"})
    description!: string;
 
    @Field()
    @Column()
    comments?: number;
 
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