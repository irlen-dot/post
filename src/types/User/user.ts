import { ReplaceFieldWithFragment } from "apollo-server";
import { Field, ID, ObjectType, Root } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostObjectType } from "../entity/ObjectPost";


@Entity()
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

    // @Field()
    // username(@Root() parent: User): String {
    //     return `${parent.firstName} . ${parent.lastName}`
    // }
    @Field()
    @Column()
    username!: string;

    @Field(()=>[PostObjectType])
    @OneToMany('PostObjectType', (post: PostObjectType) => post.user, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    posts?: Array<PostObjectType>


    @Field()
    @Column({ nullable: true })
    token!: string;
}

