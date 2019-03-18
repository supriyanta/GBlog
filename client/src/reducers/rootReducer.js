let initialState = {
	isLoggedin: false,
	user: null
};

const getData = () => {
	if (sessionStorage.getItem("initialState")) {
		return JSON.parse(sessionStorage.getItem("initialState"));
	} else {
		return {
			isLoggedin: false,
			user: null
		};
	}
};
const setData = obj => {
	sessionStorage.setItem("initialState", JSON.stringify(obj));
};
const init = () => {
	initialState = getData();
};
init();
export const rootReducer = (state = initialState, action) => {
	if (action.type === "LOGIN") {
		const data = {
			isLoggedin: true,
			user: null
		};
		setData(data);
		return {
			...state,
			isLoggedin: true
		};
	}
	if (action.type === "LOGOUT") {
		const data = {
			isLoggedin: false,
			user: null
		};
		setData(data);
		return {
			...state,
			isLoggedin: false
		};
	}
	return state;
};
