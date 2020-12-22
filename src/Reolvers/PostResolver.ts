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
import { CreatePostArgsType } from "../types/inputType/InputPost";
import { getRepository } from "typeorm";

// import { LogAccess } from "../middleware/checkInput";

import { isAuth } from "../middleware/checkInput";
import { MyContext } from "../types/context/MyContext";

@Resolver()
export class PostResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => PostObjectType, { nullable: true })
  async createPost(
    @Args() singleParametr: CreatePostArgsType
  ): Promise<PostObjectType | null> {
    const returnPost = new PostObjectType();
    returnPost.description = singleParametr.description;
    const postRep = await getRepository(PostObjectType);

    await postRep.save(returnPost);
    return returnPost;
  }

  @UseMiddleware(isAuth)
  @Query(() => PostObjectType, { nullable: true })
  async getPost(@Arg("id") id: string): Promise<PostObjectType | undefined> {
    const postRep = await getRepository(PostObjectType);
    const post = await postRep.findOne({ id });

    const postObj = await postRep
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.comments", "comment")
      .where("post.id = :id", { id })
      .getOne();
    // const rel = await postRep.findOne({ id, relations: ["comments"] });
    console.log(postObj);
    return post;
  }
}
