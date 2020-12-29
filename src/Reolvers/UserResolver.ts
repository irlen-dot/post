import bcrypt from "bcryptjs";
import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { getRepository } from "typeorm";
// import { MyContext } from "../context/MyContext";
import { UserArgs } from "../types/inputType/UserArgs";
import { User } from "../types/User/user";
import { PrivateKey, PublicKey } from "../utilites/token/keys";
import { SignOption } from "../utilites/token/signOption";
import * as jwt from "jsonwebtoken";
import { MyContext } from "../types/context/MyContext";
import { checkUser } from "../Middleware/middleware";

export interface IJwtTokenData {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
}

@Resolver()
export class UserResolver {
  
  @Mutation(() => String)
  async register(
    @Args() singleParametr: UserArgs,
    ): Promise<String | void> {
    const returnUser = new User();
    returnUser.firstName = singleParametr.firstName;
    returnUser.lastName = singleParametr.lastName;
    returnUser.email = singleParametr.email;
    
    returnUser.password = await bcrypt.hash(singleParametr.password, 12);
    returnUser.username = singleParametr.username;
    await returnUser.save();
    const tokenUser = jwt.sign(
      {
        id: returnUser.id,
        firstName: returnUser.firstName,
        lastName: returnUser.lastName,
        email: returnUser.email,
        username: returnUser.username,
      } as IJwtTokenData,
      PrivateKey,
      SignOption
    );
    returnUser.token = tokenUser;
    await returnUser.save();

    return tokenUser;
  }
}
