const Topic = require("../topic/topic.model");

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
	}
};
module.exports = {
	topicTypeDefs,
	topicResolvers
};
