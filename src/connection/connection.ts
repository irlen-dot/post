import { Connection, createConnection } from "typeorm";


export let connection: Connection;
export async function  ConnectionToDb() {
    connection = await createConnection({
        "name": "postCon",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "irlenturlykhanov",
        "password": "1234",
        "database": "users",
        "synchronize": true,
        "logging": true,
    })
};