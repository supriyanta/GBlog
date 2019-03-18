const User = require("../user/user.model");

const userTypeDefs = `

    type User {
        id: ID!
        email: String!
        password: String
    }

    type AuthData {
        user: User
    }

    input UserInput {
        email: String!
        password: String!
    }

    extend type Query {
        userLogin(input: UserInput!): AuthData
    }

    extend type Mutation {
        addUser(input: UserInput!): User!
    }

`;

const userResolvers = {
	Query: {
		userLogin: async (_, { input: { email, password } }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new Error("User email not found");
			}
			if (user.password !== password) {
				throw new Error("Password incorrect");
			}
			return { user };
		}
	},
	Mutation: {
		addUser: async (_, { input }) => {
			const user = await User.findOne({ email: input.email });
			if (user) {
				throw new Error("email already exist");
			}
			let newUser = new User(input);
			return await newUser.save();
		}
	}
};

module.exports = {
	userTypeDefs,
	userResolvers
};
