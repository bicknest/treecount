import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-client-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http:/localhost:8000/'
});

const client = new ApolloClient({
  cache,
  link,
});
