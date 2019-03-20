import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

import Main from "./components/Pages/Main";
import client from "./client";

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
