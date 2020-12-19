import bcrypt from "bcryptjs";
import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { getRepository } from "typeorm";
// import { MyContext } from "../context/MyContext";
import { UserInput } from "../types/inputType/inputUser";
import { User } from "../types/User/user";
import { PrivateKey, PublicKey } from "../utilites/token/keys";
import { SignOption } from "../utilites/token/signOption";
import * as jwt  from "jsonwebtoken";
import { isAuth } from "../middleware/checkInput";

@Resolver()
export class UserResolver {
    @UseMiddleware(isAuth)
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

    @Mutation(() => String)
    async register(@Arg("UserData") singleParametr: UserInput): Promise<String | void > {
        
        const returnUser = new User();
        returnUser.firstName = singleParametr.firstName;
        returnUser.lastName = singleParametr.lastName;
        returnUser.email = singleParametr.email;
        
        returnUser.password = await bcrypt.hash(singleParametr.password, 12);
        returnUser.username = singleParametr.username;
        await returnUser.save();
        const tokenUser = jwt.sign({
                id: returnUser.id,
                firstName: returnUser.firstName,
                lastName: returnUser.lastName,
                email: returnUser.email,
                username: returnUser.username,
        }, PrivateKey, SignOption);
        returnUser.token = tokenUser;
        await returnUser.save();
        return tokenUser;
    }


}
