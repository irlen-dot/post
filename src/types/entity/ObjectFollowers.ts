import { ObjectType } from "type-graphql";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../User/user";



@Entity()
@ObjectType()
export class followers {
    @PrimaryColumn()
    user1!: String;
   
    @PrimaryColumn()
    user2!: String;

    @ManyToOne(() => User, userId_2 => userId_2.followers)
    @JoinColumn({ name: "user2"})
    userId_2!: User[];



}