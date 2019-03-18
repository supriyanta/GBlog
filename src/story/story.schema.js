const Story = require("../story/story.model");
const Topic = require("../topic/topic.model");
const { pubSub, STORY_CREATED } = require("../config");

const storyTypeDefs = `

    type Story {
        id: ID!
        name: String!
        description: String!
		topicId: ID!
		topic: Topic!
		date_added: String
    }

    input StoryInput {
        name: String!
        description: String!
        topicId: ID!
    }

    extend type Query {
		storiesAll: [Story!]
        stories(topicId: ID!): [Story!]
        story(id: ID!): Story!
    }

    extend type Mutation {
        addStory(input: StoryInput!): Story!
    }
`;

const storyResolvers = {
	Story: {
		topic: async ({ topicId }) => {
			const topic = await Topic.findById(topicId);
			return topic;
		}
	},
	Query: {
		storiesAll: async (_, arg) => {
			const stories = await Story.find({}).sort("-date_added");
			return stories;
		},
		stories: async (_, { topicId }) => {
			const stories = await Story.find({ topicId }).sort("-date_added");
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
			const story = await newStory.save();
			pubSub.publish(STORY_CREATED, { storyAdded: story });
			return story;
		}
	}
};
module.exports = {
	storyTypeDefs,
	storyResolvers
};
