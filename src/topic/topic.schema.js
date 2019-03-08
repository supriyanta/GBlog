const { withFilter } = require("graphql-subscriptions");
const Topic = require("../topic/topic.model");
const { pubSub, STORY_CREATED } = require("../config");

const topicTypeDefs = `

    type Topic {
        id: ID!
        name: String!
    }

    input TopicInput {
        name: String!
    }

    extend type Query {
        topics: [Topic!]
        topic(id: ID!): Topic!
    }

    extend type Mutation {
        addTopic(input: TopicInput!): Topic!
	}

	extend type Subscription {
		storyAdded(topicId: ID!): Story
	}
`;

const topicResolvers = {
	Query: {
		topics: async (_, arg) => {
			const topics = await Topic.find({});
			return topics;
		},
		topic: async (_, { id }) => {
			const topic = await Topic.findById(id);
			return topic;
		}
	},
	Mutation: {
		addTopic: async (_, { input }) => {
			let newTopic = new Topic(input);
			const topic = await newTopic.save();
			return topic;
		}
	},
	Subscription: {
		storyAdded: {
			subscribe: withFilter(
				() => pubSub.asyncIterator([STORY_CREATED]),
				(payload, variables) =>
					String(payload.storyAdded.topicId) === variables.topicId
			)
		}
	}
};
module.exports = {
	topicTypeDefs,
	topicResolvers
};
