import { ObjectType, ID, Field } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity()
@ObjectType()
export class PostObjectType extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
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
}