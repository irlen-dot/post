import {
  Arg,
  Args,
  Ctx,
  // Args,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
  // UseMiddleware,
} from "type-graphql";
import { PostObjectType } from "../types/entity/ObjectPost";
import * as jwt from "jsonwebtoken";
import { CreatePostInput } from "../types/inputType/InputPost";
import { getRepository } from "typeorm";

// import { LogAccess } from "../middleware/checkInput";

import { isAuth } from "../middleware/checkInput";
import { MyContext } from "../types/context/MyContext";

@Resolver()
export class PostResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => PostObjectType, { name: "createPostByInput", nullable: true })
  async createPostByInput(
    @Args() singleParametr: CreatePostInput
  ): Promise<PostObjectType | null> {
    const returnPost = new PostObjectType();
    returnPost.description = singleParametr.description;
    const postRep = await getRepository(PostObjectType);

    await postRep.save(returnPost);
    return returnPost;
  }
}
