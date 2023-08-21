import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.hashnode.com/',
    cache: new InMemoryCache(),
    headers: {
        Authorization: '3152a15f-a2e2-44da-97d4-4d3c2485c049'
    }
});

export default client;