import {
  Arg,
  Args,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { PostObjectType } from "../types/entity/ObjectPost";

import { CreatePostInput } from "../types/inputType/InputPost";
import { getRepository } from "typeorm";
import { LogAccess } from "../middleware/checkInput";

@Resolver()
export class PostResolver {
  @Query(() => String)
  async HelloBitch() {
    return "HiBitch";
  }

  @Mutation(() => PostObjectType, { name: "createPostByInput", nullable: true })
  @UseMiddleware(LogAccess)
  async saas(
    @Arg("singleParametr") singleParametr: CreatePostInput
  ): Promise<PostObjectType | null> {
    // const returnPost = new PostObjectType();
    // returnPost.description = singleParametr.description;

    // returnPost.comments = singleParametr.comments;
    // returnPost.likes = singleParametr.likes;
    // // returnPost.id = singleParametr.id;
    // returnPost.isActive = singleParametr.isActive;

    // const postRep = await getRepository(PostObjectType);
    // postRep.save(returnPost);
    // return returnPost;
    return null;
  }
}
