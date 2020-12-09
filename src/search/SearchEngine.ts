import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { createConnection } from "typeorm";
import { PostObjectType } from "../entity/ObjectPost";
import { UserInput } from "../inputType/inputUser";
import { InputSearch } from "../inputType/SearchInput";



@Resolver()
export class SearchResolver {
    @Query(() => String)
    async HiMazafaka() {
        return "Hi, Mazafaka";
    }

    @Mutation(() => PostObjectType, { name: 'SearchEngine' })
    async SearchDescription(
        @Arg('SearchParametrs') singleParametr: InputSearch
    ) {
        const searchTerm = InputSearch.description;
        const connectToDB = await createConnection({
            "name": "postCon",
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "irlenturlykhanov",
            "password": "1234",
            "database": "users",
            "synchronize": true,
            "logging": true,
        });
        

        
    }


        
}