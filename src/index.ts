import "reflect-metadata";
import { buildSchema } from "type-graphql";

import { ApolloServer } from "apollo-server";
import { createConnection } from "typeorm";
import { PostObjectType } from "./types/entity/ObjectPost";
import { UserResolver } from "./Reolvers/UserResolver";
import { User } from "./types/User/user";

import { AuthorizationReolver } from "./Reolvers/AuthorizationReolver";

import { ObjectComment } from "./types/entity/ObjectComment";
import { isAuth } from "./middleware/checkInput";
import * as jwt from "jsonwebtoken";
import { PostResolver } from "./Reolvers/PostResolver";
import { TestResolver } from "./Reolvers/TestReolver";
import { Command } from "ioredis";
import { CommentsReolver } from "./Reolvers/CommentResolver";

const PORT = process.env.PORT || 4040;

async function Bootstrap() {
  const connectionPost = await createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "hellomik",
    password: "2106",
    database: "posts",
    synchronize: true,
    logging: true,
    entities: [PostObjectType, User, ObjectComment],
  });

  const schema = await buildSchema({
    resolvers: [
      TestResolver,
      CommentsReolver,
      UserResolver,
      AuthorizationReolver,
      PostResolver,
    ],
    globalMiddlewares: [isAuth],
  });

  const production = process.env.NODE_ENV === "production";

  const server = new ApolloServer({
    schema: schema,
    playground: true,
    // context: ({ req }) => {
    //   const token = req.headers.authorization || "";

    //   const user = jwt.decode(token);

    //   if (!user) throw new Error("you must be logged in");

    //   return { user };
    // },
  });

  server.listen(PORT, () => {
    console.log("Server started, bitch");
  });

  // const serverInfo = await server.listen(PORT);
  // console.log("SERVEER STARTED");
}

Bootstrap();
