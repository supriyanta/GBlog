import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import localStateResolvers from "./resolvers";
import { getData } from "./sessionStorage";

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: "http://localhost:4000/graphql"
});
const client = new ApolloClient({
	cache,
	link,
	resolvers: localStateResolvers
});

const data = getData();
cache.writeData({ data });
client.onResetStore(() => cache.writeData({ data }));

export default client;
