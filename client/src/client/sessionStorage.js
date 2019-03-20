export const getData = () => {
	if (sessionStorage.getItem("initialState")) {
		return JSON.parse(sessionStorage.getItem("initialState"));
	} else {
		return {
			isLoggedin: false,
			user: null
		};
	}
};
export const setData = obj => {
	sessionStorage.setItem("initialState", JSON.stringify(obj));
};
