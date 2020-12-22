import { Args, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { LoginArgs } from "../types/inputType/LoginInput";
import bcrypt from "bcryptjs";
import { User } from "../types/User/user";

@Resolver()
export class AuthorizationReolver {
  @Query(() => User)
  async login(@Args() theParametr: LoginArgs): Promise<User | null | void> {
    const TheUser = await getRepository(User);

    const TheEmail = theParametr.email;
    const TheUsername = theParametr.username;
    const ThePassword = theParametr.password;

    const EmailFind = await TheUser.findOne({ where: { email: TheEmail } });
    const UsernameFind = await TheUser.findOne({
      where: { username: TheUsername },
    });

    if (!EmailFind && !UsernameFind) {
      return null;
    }

    if (EmailFind) {
      const PasswordMatch = await bcrypt.compare(
        ThePassword,
        EmailFind!.password
      );
      if (!PasswordMatch) {
        return null;
      } else {
        return EmailFind;
      }
    }

    if (UsernameFind) {
      const PasswordMatch = await bcrypt.compare(
        ThePassword,
        UsernameFind!.password
      );
      if (!PasswordMatch) {
        return null;
      } else {
        return UsernameFind;
      }
    }
  }
}
