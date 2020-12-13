import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { PostObjectType  } from "../entity/ObjectPost";
import { CreatePostArgs } from "../argsType/ArgsPost";
import { CreatePostInput } from "../inputType/InputPost";
import { getRepository } from "typeorm";

@Resolver()
export class PostResolver {
    @Query(() => String)
    async HelloBitch() {
        return "HiBitch";
    }

    @Mutation(() => PostObjectType, { name: 'createPostByArgs' })
    async createPostByArgs(
        @Args() allArgs: CreatePostArgs
    ): Promise<PostObjectType | void> { // void returns "undefined"
        const returnPost = new PostObjectType();
        returnPost.description = allArgs.description;
        
        returnPost.comments = allArgs.comments;
        returnPost.likes = allArgs.likes;
        // returnPost.id = allArgs.id;
        returnPost.isActive = allArgs.isActive;
        
        const postRep = await getRepository(PostObjectType);
        postRep.save(returnPost);
        return returnPost;
    }

    @Mutation(() => PostObjectType, { name: "createPostByInput" })
    async saas(
        @Arg('ingleParametr') singleParametr: CreatePostInput
    ): Promise<PostObjectType | void> {
        const returnPost = new PostObjectType();
        returnPost.description = singleParametr.description;
        
        returnPost.comments = singleParametr.comments;
        returnPost.likes = singleParametr.likes;
        // returnPost.id = singleParametr.id;
        returnPost.isActive = singleParametr.isActive;

        const postRep = await getRepository(PostObjectType);
        postRep.save(returnPost);
        return returnPost;
    }

    


}