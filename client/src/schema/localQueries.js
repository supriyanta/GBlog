import gql from "graphql-tag";

export const loginMutation = gql`
	mutation {
		loginUser @client
	}
`;

export const logoutMutation = gql`
	mutation {
		logoutUser @client
	}
`;

export const authQuery = gql`
	{
		isLoggedin @client
	}
`;
