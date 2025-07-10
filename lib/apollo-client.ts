import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:5181/graphql', // ASP.NET GraphQL endpoint
  cache: new InMemoryCache(),
});