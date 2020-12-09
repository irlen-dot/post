import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    GHOST = "ghost"
}

@Entity()
export class User {
    static helo (){}
    @PrimaryGeneratedColumn()
    id?: number //| undefined;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.GHOST
    })
    role?: UserRole //| undefined

}
User.helo();
