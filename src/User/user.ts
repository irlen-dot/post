import { Field, ID, ObjectType, Root } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
@ObjectType()
export class User extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

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

    @Column()
    username!: string;
}

