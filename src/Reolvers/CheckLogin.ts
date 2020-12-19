
import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { getRepository } from "typeorm";
import { LoginInput } from "../types/inputType/LoginInput";
import bcrypt from "bcryptjs";
import { User } from "../types/User/user";

@Resolver()
export class CheckLogin {
   
   

    // @Query(() => User)
    // async LoginCheck(): Promise < User | null | void > {
    //     const TheUser = await getRepository(User);
        

    //     return TheUser.findOne({username:"rere" });
    //     }


    @Mutation(() => User)
    // @UseMiddleware(LogAccess)
    async Login(@Arg("LoginData") theParametr: LoginInput): Promise < User | null | void > {
        
            const TheUser = await getRepository(User);
            const TheEmail = theParametr.email;
            // const emailOrUsername
            const TheUsername = theParametr.username;
            const ThePassword = theParametr.password;
            
            const EmailFind = await TheUser.findOne({ where: {email: TheEmail} });
            const UsernameFind = await TheUser.findOne({ where: {username: TheUsername }});       
            
            console.log('EmailFind', EmailFind);
            console.log('UsernameFind', UsernameFind);

            if(!EmailFind && !UsernameFind){
                return  null; 
            }

            if (EmailFind) {
                const PasswordMatch = await bcrypt.compare(ThePassword, EmailFind!.password);
                if(!PasswordMatch) {
                    return null;
                }
                else {
                    return EmailFind;
                }
            
                
            }

            if (UsernameFind) {
                const PasswordMatch = await bcrypt.compare(ThePassword, UsernameFind!.password);
                if(!PasswordMatch) {
                    return null;
                }
                else {
                    return UsernameFind;
                }
            }
        }
}