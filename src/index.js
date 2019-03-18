const { merge } = require("lodash");
const { topicTypeDefs, topicResolvers } = require("./topic/topic.schema");
const { storyTypeDefs, storyResolvers } = require("./story/story.schema");
const { userTypeDefs, userResolvers } = require("./user/user.schema");
const root = require("./root");

const typeDefs = [root, topicTypeDefs, storyTypeDefs, userTypeDefs];
const resolvers = merge(topicResolvers, storyResolvers, userResolvers);

module.exports = {
	typeDefs,
	resolvers
};
