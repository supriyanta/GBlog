import { setData } from "./sessionStorage";

const localStateResolvers = {
	Mutation: {
		loginUser: (_, args, { cache }) => {
			const data = {
				isLoggedin: true,
				user: null
			};
			cache.writeData({
				data
			});
			setData(data);
			return true;
		},
		logoutUser: (_, args, { cache }) => {
			const data = {
				isLoggedin: false,
				user: null
			};
			cache.writeData({
				data
			});
			setData(data);
			return true;
		}
	}
};
export default localStateResolvers;
