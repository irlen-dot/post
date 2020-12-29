import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { getRepository } from "typeorm";
import { MyContext } from "../types/context/MyContext";
import { User } from "../types/User/user";
import * as jwt from "jsonwebtoken";
import { checkUser } from "../Middleware/middleware";
// import { InputFollower } from "../types/inputType/InputFollower";
import { followers } from "../types/entity/ObjectFollowers";
import { PublicKey } from "../utilites/token/keys";
import { IJwtTokenData } from "./UserResolver";
// import { tokenId } from "../interface/FollowInterface";

@Resolver()
export class FollowerResolver {
//    @Mutation(() => User, {nullable: true})
//    async follow(
//        @Arg("me") my_id: String,
//        @Arg("to") his_id: String
//    ) {
//     const userRep = await getRepository(User);
//     const meObj = await userRep.findOne({ where: { id: my_id }});
//     const toObj = await userRep.findOne({ where: { id: his_id }});
//     if (!meObj) return;
//     if (!toObj) return;
//     toObj!.followersInfo = [meObj!];
//     toObj?.save();
//     const findFollow = await userRep.find({where: {relations: [User]}}); 
//     const FollowCount = await findFollow.count()
//     return meObj;


//    } 

    @UseMiddleware(checkUser)
    @Mutation(() => User, { nullable: true })
    async follow(
        // @Arg("from") my_id: String,
        @Arg("to") his_id: String,
        @Ctx() ctx: MyContext,
    ) {
        const userRep = await getRepository(User);
        const toObj = await userRep.findOne({ where: { id: his_id}});

        if (!toObj) return;

        const getToken = ctx.req.headers.authorization;
        


        const tokenVer = jwt.verify(getToken!, PublicKey) as IJwtTokenData;
        const tokenDec = jwt.decode(getToken!);

        

        
        console.log(tokenVer)

        return null;

    }
   
   
}