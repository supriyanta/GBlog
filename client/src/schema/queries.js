import gql from "graphql-tag";

export const topicsQuery = gql`
	query {
		topics {
			name
			id
		}
	}
`;
export const addTopicMutation = gql`
	mutation($name: String!) {
		addTopic(input: { name: $name }) {
			name
			id
		}
	}
`;

export const storiesAllQuery = gql`
	query {
		storiesAll {
			name
			description
			id
			topic {
				name
			}
		}
	}
`;

export const storiesQuery = gql`
	query($id: ID!) {
		stories(topicId: $id) {
			name
			description
			id
			topic {
				name
			}
		}
	}
`;
export const addStoryMutation = gql`
	mutation($input: StoryInput!) {
		addStory(input: $input) {
			name
			description
			topic {
				name
			}
		}
	}
`;

export const addUserMutation = gql`
	mutation($input: UserInput!) {
		addUser(input: $input) {
			email
			password
			id
		}
	}
`;
export const userLoginQuery = gql`
	query($input: UserInput!) {
		userLogin(input: $input) {
			user {
				email
			}
		}
	}
`;
