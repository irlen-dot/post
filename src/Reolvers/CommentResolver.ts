import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { ObjectComment } from "../types/entity/ObjectComment";
import { ObjectPost } from "../types/entity/ObjectPost";
import { InputComment } from "../types/inputType/InputComment";


@Resolver()
export class CommentResolver {
    @Mutation(() => ObjectComment, { name: "CommentResolver", nullable: true})
    async PutComment(
        @Arg('comment-data') SingleParametr: InputComment
    ): Promise< ObjectComment | null> {
        const PostRep = await getRepository(ObjectPost)
        const PostObj = await PostRep.findOne({ id: SingleParametr.Postid});
        
        const ComObj = new ObjectComment(SingleParametr.body, PostObj);
        ComObj.save();
        
        
        return ComObj;
    }
    @Query(() => [ObjectComment], { nullable: true })
    async getComments(
        @Arg("id") postId: String
    ): Promise<ObjectComment[] | null | undefined> {
        const ComRep = await getRepository(ObjectComment);

        const PostObj = await ComRep.findAndCount({
            where: {
                post: postId
            },
            take: 5
        });
    
        return PostObj[0];
    }



}