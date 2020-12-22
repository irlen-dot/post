import { MiddlewareFn } from "type-graphql";
import * as jwt from "jsonwebtoken";
import { User } from "../types/User/user";
import { getRepository } from "typeorm";
import { MyContext } from "../types/context/MyContext";
import { PrivateKey, PublicKey } from "../utilites/token/keys";

// export const LogAccess: MiddlewareFn = ({ context, info }, next) => {
//   console.log(info);
//   const token = (context as any).req.headers.authorization;
//   console.log(jwt.decode((context as any).req.headers.authorization));
//   console.log((context as any).req.headers.authorization);
//   return next();
// };

export const isAuth: MiddlewareFn<MyContext> = async (
  { info, context },
  next
) => {
  console.log(info);
  console.log(info.fieldName);
  
  // if (info.fieldName == "Login" || info.fieldName == "register") {
  //   return next();
  // }
  
  // console.log((context as any).req.header.authorization);
  // console.log(jwt.decode((context as any).req.header.authorization));
  // if (!jwt.verify((context as any).req.header.authorization, PublicKey)) {
  //   throw new Error('no authorization');
  // }
  const teok = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5MmEwYmM4LTJiMDUtNDZkNS05MjgwLWIzMGQxNmI4MThjZCIsImZpcnN0TmFtZSI6IkxBTiIsImxhc3ROYW1lIjoiQVQiLCJlbWFpbCI6ImhlbG9taWsxMUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imxsb20xMSIsImlhdCI6MTYwODU1NDU5NywiZXhwIjoxNjQwMDkwNTk3LCJhdWQiOiIiLCJpc3MiOiIiLCJzdWIiOiIifQ.FuhfkuNuVuHM-9eru0uAst6PPWTPWfYRADVqwwpnfz9bC5JLuVffLZqBP7ZyiILk4u_dCPYu6dCQSgpXG0P-lg';
  console.log(jwt.decode(teok));
  return next();
};
