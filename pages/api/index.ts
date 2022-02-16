import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageDisabled } from "apollo-server-core";
import { Resolvers } from "../../graphql/Resolvers";
import { TypeDefs } from "../../graphql/TypeDefs";

const server = new ApolloServer({
    typeDefs: TypeDefs,
    resolvers: Resolvers,
    plugins: [
        ApolloServerPluginLandingPageDisabled()
    ]
});

export default async function handler(req: any, res: any) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }

    await server.start();
    await server.createHandler({
        path: "/api"
    }) (req, res);
}

export const config = {
    api: {
        bodyParser: false
    }
}
