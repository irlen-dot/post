import bcrypt from "bcryptjs";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { MyContext } from "../context/MyContext";
import { UserInput } from "../inputType/inputUser";
import { User } from "../User/user";



@Resolver()
export class UserResolver {
    @Query(() => String)
    async HelloBitch() {
        return "HiBitch";
    }

    // @Mutation(() => User)
    // async register(@Arg("data") SingleParametr: UserInput): Promise<User | any> {
    //     const hashedPassword = await bcrypt.hash(SingleParametr.password, 12)

    //     const Username = `${SingleParametr.firstName} . ${SingleParametr.lastName}`

    //     // const user = await User.create({
    //     //     firstName,
    //     //     lastName,
    //     //     email,
    //     //     password: hashedPassword,
    //     //     username: Username
    //     // }).save();

    //     const userRep = await getRepository(User);
    //     userRep.save({SingleParametr.firstName, })

    //     return user;
    // }

    @Mutation(() => User)
    async register(@Arg("UserData") singleParametr: UserInput): Promise<User | void> {
        const returnUser = new User();
        returnUser.firstName = singleParametr.firstName;
        returnUser.lastName = singleParametr.lastName;
        returnUser.email = singleParametr.email;
        // const hashedPassword = bcrypt.hash(singleParametr.password, 12)
        returnUser.password = await bcrypt.hash(singleParametr.password, 12);
        returnUser.username = singleParametr.username;
        const userRep = await getRepository(User);
        userRep.save(returnUser);
        return returnUser;
    }


}
