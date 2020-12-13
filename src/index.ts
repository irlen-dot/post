import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./Reolvers/ResolvePost";
import { ApolloServer } from "apollo-server";
import { createConnection } from "typeorm";
import { PostObjectType } from "./types/entity/ObjectPost";
import { UserResolver } from "./Reolvers/ResolveUser";
import { User } from "./types/User/user";
import Express from "express";
import { CheckLogin } from "./Reolvers/CheckLogin";
import { json } from "body-parser";

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
    entities: [PostObjectType, User],
  });

  const schema = await buildSchema({
    resolvers: [PostResolver, UserResolver, CheckLogin],
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
