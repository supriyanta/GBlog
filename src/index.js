const { merge } = require("lodash");
const { topicTypeDefs, topicResolvers } = require("./topic/topic.schema");
const { storyTypeDefs, storyResolvers } = require("./story/story.schema");
const root = require("./root");

const typeDefs = [root, topicTypeDefs, storyTypeDefs];
const resolvers = merge(topicResolvers, storyResolvers);

module.exports = {
	typeDefs,
	resolvers
};
