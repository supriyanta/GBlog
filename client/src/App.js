import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import Main from "./components/Pages/Main";

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: "http://localhost:4000/graphql"
});
const client = new ApolloClient({
	cache,
	link
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div>
					<Main />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
