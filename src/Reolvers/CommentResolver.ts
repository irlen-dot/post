import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";

import { ObjectComment } from "../types/entity/ObjectComment";
import { PostObjectType } from "../types/entity/ObjectPost";
import { CreateCommentArgsType } from "../types/inputType/CommentInput";

@Resolver()
export class CommentsReolver {
  //

  @Mutation(() => ObjectComment, { nullable: true })
  async createComment(@Args() singlePar: CreateCommentArgsType) {
    const rep = await getRepository(PostObjectType);
    const postObj = await rep.findOne({ id: singlePar.postId });
    console.log(postObj);
    if (!postObj) return;
    const commentObj = new ObjectComment(singlePar.description, postObj);
    commentObj.post = postObj;
    await commentObj.save();

    if (postObj.comments == undefined || postObj.comments == null) {
      postObj.comments = [];
    }
    postObj.comments.push(commentObj);
    await postObj.save();
    return commentObj;
  }

  @Query(() => [ObjectComment], { nullable: true })
  async getComments(
    @Arg("id") postId: string
  ): Promise<ObjectComment[] | null | undefined> {
    const postRep = await getRepository(PostObjectType);
    const commentRep = await getRepository(ObjectComment);

    const postObj = await commentRep.findAndCount({
      where: {
        post: postId,
        // await postRep.findOne({ id: postId }),
      },
      take: 5,
    });

    return postObj[0];
  }
}
