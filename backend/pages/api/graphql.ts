import { buildSubgraphSchema } from "@apollo/subgraph";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schemas";
import { ApolloServer } from "apollo-server-cloud-functions";
import { connectMongoose } from "@/common/mongoose";

connectMongoose();

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    cache: new InMemoryLRUCache(),
    csrfPrevention: false,
    introspection: true,
    context: async ({ req }) => {

        const { headers } = req;

        return {
            headers,
        };
    },
});

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};

export default server.createHandler();

