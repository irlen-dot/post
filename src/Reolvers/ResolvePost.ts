import {
  Arg,
  // Args,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
  // UseMiddleware,
} from "type-graphql";
import { PostObjectType } from "../types/entity/ObjectPost";

import { CreatePostInput } from "../types/inputType/InputPost";
import { getRepository } from "typeorm";

// import { LogAccess } from "../middleware/checkInput";

import { InputComment } from "../types/inputType/InputComment";
import { isAuth } from "../middleware/checkInput";

@Resolver()
export class PostResolver {
  @Query(() => String)
  async HelloBitch() {
    return "HiBitch";
  }

  @UseMiddleware(isAuth)
  @Mutation(() => PostObjectType, { name: "createPostByInput", nullable: true })
  // @UseMiddleware(LogAccess)
  async saas(
    @Arg("singleParametr") singleParametr: CreatePostInput
  ): Promise<PostObjectType | null> {
    const returnPost = new PostObjectType();
    returnPost.description = singleParametr.description;
    
    // returnPost.comments = singleParametr.comments;
    // returnPost.likes = singleParametr.likes;
    // returnPost.id = singleParametr.id;
    // returnPost.isActive = singleParametr.isActive;

    const postRep = await getRepository(PostObjectType);
    // const CommentPost = await postRep.find({ relations: [comments] });
   

    await postRep.save(returnPost);
    return returnPost;
    
  }
}
