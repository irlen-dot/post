import { MiddlewareFn } from "type-graphql";
import * as jwt from "jsonwebtoken";

export const LogAccess: MiddlewareFn = ({ context, info }, next) => {
  console.log(info);
  const token = (context as any).req.headers.authorization;
  console.log(jwt.decode((context as any).req.headers.authorization));
  console.log((context as any).req.headers.authorization);
  return next();
};
