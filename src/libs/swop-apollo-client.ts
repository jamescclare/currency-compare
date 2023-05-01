import { ApolloClient, HttpLink, ApolloLink, InMemoryCache } from "@apollo/client";

const BASE_URI = 'https://swop.cx/graphql';

const { SWOP_API_TOKEN } = process.env;

const baseLink = new HttpLink({ uri: BASE_URI });

const linkWithApiKey = new ApolloLink((operation, forward) => {
    if (!SWOP_API_TOKEN) throw new Error('SWOP_API_TOKEN must be set');

    operation.setContext({
        headers: {
            authorization: `ApiKey ${SWOP_API_TOKEN}`
        }
    });

    return forward(operation);
});

const authenticatedLink = linkWithApiKey.concat(baseLink);

const client = new ApolloClient({
    link: authenticatedLink,
    cache: new InMemoryCache(),
});

export default client;
export { client, BASE_URI };
