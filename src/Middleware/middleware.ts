import { MiddlewareFn } from "type-graphql";
import * as jwt from "jsonwebtoken";



export const checkUser: MiddlewareFn = async ({ context, info}, next) => {
    // const token = req.headers.authorization || "";
    // console.log(req.body);
    // const user = jwt.decode(token);
      
    // if (!user) {
    //   throw new Error ("Hi");
    // } 

    // return { user };
    console.log((context as any).req.headers.authorization);
    const token = (context as any).req.headers.authorization;
    const user = jwt.decode(token)

    if(!user) throw new Error("you have to be logged in")

    return next()
    
};


