import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { InputComment } from "../types/inputType/InputComment";
import { ObjectComment } from "../types/entity/ObjectComment";
import { PostObjectType } from "../types/entity/ObjectPost";
import { Entity, getManager, getRepository } from "typeorm";

@Resolver()
export class ResolveComment {
    @Query(() => String)
    async Hi() {
        return "Hi";
    }
    
    
    @Mutation(() => ObjectComment)
    async CommentResolver(
        @Arg("DataComment") SingleParametr: InputComment
    ): Promise< ObjectComment |  PostObjectType | null> {
        const ComObj = new ObjectComment();
        // const PostObj = new PostObjectType();
        
        
        ComObj.body = SingleParametr.body;
        console.log(await ComObj.save());
        
        return ComObj;


    }
}