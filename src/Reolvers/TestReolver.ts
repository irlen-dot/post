import { Query, Resolver, UseMiddleware } from "type-graphql";
import { checkUser } from "../Middleware/middleware";

@Resolver()
export class TestResolver {
  @UseMiddleware(checkUser)
  @Query(() => String, { nullable: true })
  async helloWorld(): Promise<string> {
    return "Hello World!";
  }
}
