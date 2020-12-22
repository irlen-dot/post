import { Arg, Mutation, Query, Resolver, Ctx } from "type-graphql";
import { InputComment } from "../types/inputType/InputComment";
import { ObjectComment } from "../types/entity/ObjectComment";
import { PostObjectType } from "../types/entity/ObjectPost";
import { Connection, Entity, getManager, getRepository } from "typeorm";


@Resolver()
export class ResolveComment {
    @Query()
    async Hi() {
        return "Hi";
    }
    
    
    @Mutation(() => ObjectComment)
    async CommentResolver(
        @Arg("DataComment") SingleParametr: InputComment,
        @Ctx() ctx:any
    ): Promise< ObjectComment |  PostObjectType | null> {
        const ComObj = new ObjectComment();
        const PostObj = new PostObjectType();
        // const PostObj = new PostObjectType();
        console.log(ctx);
        ComObj.user = ctx.username;
        ComObj.body = SingleParametr.body;
        await ComObj.save();
        PostObj.comments = [ComObj]
        await PostObj.save();
        
        
        
        
        return ComObj;


    }
}``