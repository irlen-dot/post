import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../User/user";
import bcrypt from "bcryptjs";
import { LoginInput } from "../inputType/LoginInput";
import { MyContext } from "../context/MyContext";
import jwt from "jsonwebtoken";

@Resolver()
export class LoginResolver {
    @Mutation(() => User, { nullable: true })
    async Login(
        @Arg("LoginData") singleParametr: LoginInput,
        @Ctx() ctx: MyContext
        ): Promise< String | null | undefined > {
        const EmailShit = singleParametr.email;
        const usernameShit = singleParametr.username;
        const passwordShit = singleParametr.password;
        const userEmail = await User.findOne({ where: { EmailShit } });
        const UserUsername = await User.findOne({ where: { usernameShit } })
        
        
        if (!userEmail && !UserUsername) {
            return null;
        }
        
        if (userEmail === undefined) {
            const validPassword = await bcrypt.compare( passwordShit, UserUsername!.password )
            if (!validPassword) {
                return null;
            }
            else {
                // ctx.req.session!.userId = UserUsername!.id;
                const UserToken = jwt.sign({ user: UserUsername }, "secretkey");
                // return UserUsername;
                return UserToken;
            }
        }

        if (UserUsername === undefined) {
            const validPassword = await bcrypt.compare( passwordShit, userEmail!.password )
            if (!validPassword) {
                return null;
            }
            else {
                const UserToken = jwt.sign({ user: userEmail }, "secretkey");
                return UserToken;
            }
        }

        
    }
}





