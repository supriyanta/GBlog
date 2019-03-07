const { ApolloServer } = require("apollo-server");
const { makeExecutableSchema } = require("graphql-tools");
const mongoose = require("mongoose");
const { merge } = require("lodash");

const { topicTypeDefs, topicResolvers } = require("./src/topic/topic.schema");
const { storyTypeDefs, storyResolvers } = require("./src/story/story.schema");
const root = require("./src/root");

mongoose
	.connect("mongodb://localhost/gblog", { useNewUrlParser: true })
	.then(() => console.log("DB connected!"))
	.catch(() => console.log("DB connection failed!"));
mongoose.set("useCreateIndex", true);

const schema = makeExecutableSchema({
	typeDefs: [root, topicTypeDefs, storyTypeDefs],
	resolvers: merge(topicResolvers, storyResolvers)
});

const server = new ApolloServer({
	schema,
	formatError: error => {
		console.log(error);
		return error;
	}
});

server.listen().then(({ url }) => console.log(`🚀  server running at ${url}`));
