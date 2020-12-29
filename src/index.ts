import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { createConnection } from "typeorm";
import { ObjectPost } from "./types/entity/ObjectPost";
import { UserResolver } from "./Reolvers/UserResolver";
import { User } from "./types/User/user";
import { AuthorizationReolver } from "./Reolvers/AuthorizationReolver";
import { ObjectComment } from "./types/entity/ObjectComment";
import * as jwt from "jsonwebtoken";
import { PostResolver } from "./Reolvers/PostResolver";
import { TestResolver } from "./Reolvers/TestReolver";
// import { FollowerResolver } from "./Reolvers/FollowerResolver";
import { followers } from "./types/entity/ObjectFollowers";
import { FollowerResolver } from "./Reolvers/FollowerResolver";



const PORT = process.env.PORT || 4040;

async function Bootstrap() {
  const connectionPost = await createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "irlenturlykhanov",
    password: "2106",
    database: "posts",
    synchronize: true,
    logging: true,
    entities: [ObjectPost, User, ObjectComment, followers],
  });

  const schema = await buildSchema({
    resolvers: [TestResolver, UserResolver, AuthorizationReolver, PostResolver, FollowerResolver],
  });

  const production = process.env.NODE_ENV === "production";

  const server = new ApolloServer({
    schema: schema,
    playground: true,
    // context: ({ req }) => {
    //   const token = req.headers.authorization || "";
    //   console.log(req.body);
    //   const CheckReg = req.body.findOne({ where: { operationName: 'register'}})
    //   const user = jwt.decode(token);

    //   if (!user) {
    //     throw new Error ("Hi");
    //   } 

    //   if (!CheckReg) return { user }
      
      
      

    //   return { user };
    // },
    context: ({ req }) => ({ req })
  });

  server.listen(PORT, () => {
    console.log("Server started, bitch");
  });

  // const serverInfo = await server.listen(PORT);
  // console.log("SERVEER STARTED");
}

Bootstrap();
