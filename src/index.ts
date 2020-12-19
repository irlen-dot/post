import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./Reolvers/ResolvePost";
import { ApolloServer } from "apollo-server";
import { createConnection } from "typeorm";
import { PostObjectType } from "./types/entity/ObjectPost";
import { UserResolver } from "./Reolvers/ResolveUser";
import { User } from "./types/User/user";
// import Express from "express";
import { CheckLogin } from "./Reolvers/CheckLogin";
// import { json } from "body-parser";
import { ResolveComment } from "./Reolvers/ResolveComment";
import { ObjectComment } from "./types/entity/ObjectComment";
import { isAuth } from "./middleware/checkInput";

const PORT = process.env.PORT || 4040;

async function Bootstrap() {
  const connectionPost = await createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "irlenturlykhanov",
    password: "1234",
    database: "posts",
    synchronize: true,
    logging: true,
    entities: [PostObjectType, User, ObjectComment],
  });

  const schema = await buildSchema({
    resolvers: [PostResolver, UserResolver, CheckLogin, ResolveComment],
    globalMiddlewares:[isAuth]
  });

  const production = process.env.NODE_ENV === "production";

  const server = new ApolloServer({
    schema: schema,
    playground: true,
    context: ({ req }: any) => ({ req }),
  });

  server.listen(PORT, () => {
    console.log("Server started, bitch");
  });

  // const serverInfo = await server.listen(PORT);
  // console.log("SERVEER STARTED");
}

Bootstrap();
