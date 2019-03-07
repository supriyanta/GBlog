const Story = require("../story/story.model");

const storyTypeDefs = `

    type Story {
        id: ID!
        name: String!
        description: String!
        topicId: ID!
    }

    input StoryInput {
        name: String!
        description: String!
        topicId: ID!
    }

    extend type Query {
        stories(topicId: ID!): [Story!]!
        story(id: ID!): Story!
    }

    extend type Mutation {
        addStory(input: StoryInput): Story!
    }
`;

const storyResolvers = {
	Query: {
		stories: async (_, { topicId }) => {
			const stories = await Story.find({ topicId });
			return stories;
		},
		story: async (_, { id }) => {
			const story = await Story.findById(id);
			return story;
		}
	},
	Mutation: {
		addStory: async (_, { input }) => {
			const newStory = new Story(input);
			const story = await newStory;
			return story;
		}
	}
};
module.exports = {
	storyTypeDefs,
	storyResolvers
};
