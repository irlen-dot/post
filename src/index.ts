import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./PostShit/ResolvePost";
import { ApolloServer } from "apollo-server";
import { createConnection } from "typeorm";
import { PostObjectType } from "./entity/ObjectPost";
import { UserResolver } from "./PostShit/ResolveUser";
import { User } from "./User/user";


const PORT = process.env.PORT || 4040;

async function Bootstrap() {

    const connectionPost = await createConnection({
        "name": "default",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "irlenturlykhanov",
        "password": "1234",
        "database": "posts",
        "synchronize": true,
        "logging": true,
        "entities": [PostObjectType]
    });

    const connectionUser = await createConnection({
       "name": "defaul",
       "type": "postgres",
       "host": "localhost",
       "port": 5432,
       "username": "irlenturlykhanov",
       "password": "1234",
       "database": "posts",
       "synchronize": true,
       "logging": true,
       "entities": [User]
    });

    const schema = await buildSchema({
        resolvers: [PostResolver, UserResolver],
    });

    const production = process.env.NODE_ENV === "production"

    const server = new ApolloServer({
        schema: schema,
        playground: true,
    });

    const serverInfo = await server.listen(PORT);
    console.log("SERVEER STARTED");
}

Bootstrap() 