import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { dataSource } from "./config/db";
import { buildSchema } from "type-graphql";
import PlayerResolver from "./resolvers/PlayerResolver";
import CountryResolver from "./resolvers/CountryResolver";


const port = 4000;

async function start() {
  await dataSource.initialize();
  
  const schema = await buildSchema({
      resolvers: [PlayerResolver, CountryResolver],
    });
    
    const server = new ApolloServer({ schema });
    
    const { url } = await startStandaloneServer(server, {
      listen: { port: port }
    });
    
    console.log(`🚀  Server ready at: ${url}`);
    }
    start()


