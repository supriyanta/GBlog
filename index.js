const express = require("express");
const { createServer } = require("http");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const mongoose = require("mongoose");

const { typeDefs, resolvers } = require("./src");

mongoose
	.connect("mongodb://localhost/gblog", { useNewUrlParser: true })
	.then(() => console.log("DB connected!"))
	.catch(() => console.log("DB connection failed!"));
mongoose.set("useCreateIndex", true);

const app = express();
app.use(cors());

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

const apolloServer = new ApolloServer({
	schema,
	formatError: error => {
		console.log(error);
		return error;
	}
});
apolloServer.applyMiddleware({ app });
const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

const PORT = 4000;
httpServer.listen({ port: PORT }, () => {
	console.log(
		`🚀  server running at http://localhost:${PORT}${
			apolloServer.graphqlPath
		}`
	);
	console.log(
		`🚀  server running at ws://localhost:${PORT}${
			apolloServer.graphqlPath
		}`
	);
});
