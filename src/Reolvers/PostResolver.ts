import {
  Arg,
  Args,
  
  // Args,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
  // UseMiddleware,
} from "type-graphql";
import { ObjectPost } from "../types/entity/ObjectPost";
import * as jwt from "jsonwebtoken";
import { CreatePostInput } from "../types/inputType/InputPost";
import { getRepository } from "typeorm";
// import { LogAccess } from "../middleware/checkInput";

import { User } from "../types/User/user";
import { MyContext } from "../types/context/MyContext";
import { Context } from "react";
import { checkUser } from "../Middleware/middleware";

@Resolver()
export class PostResolver {
  @UseMiddleware(checkUser)
  @Mutation(() => ObjectPost, { name: "createPostByInput", nullable: true })
  async createPostByInput(
    @Args() singleParametr: CreatePostInput,
    
  ): Promise< ObjectPost | null > {
    const UserRep = await getRepository(User);
    const UserObj = await UserRep.findOne({ id: singleParametr.ownerId}); 
    
    const PostObj = new ObjectPost(singleParametr.description, UserObj?.id);
    PostObj.username = UserObj!.username;
    PostObj.save();

    return PostObj;

  }

  @Query(() => [ObjectPost], { nullable: true })
  async getPosts(
    @Arg("id") userId: String 
  ): Promise<ObjectPost[] | null | undefined> {
    const PostRep = await getRepository(ObjectPost);

    const PostObj = await PostRep.findAndCount({
      where: {
        user: userId
      },
      take: 5
    });

    return PostObj[0];


  }
}
