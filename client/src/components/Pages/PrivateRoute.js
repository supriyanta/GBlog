import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
	if (rest.path === "/login" || rest.path === "/register") {
		return (
			<Route
				{...rest}
				render={props => {
					return authed === false ? (
						<Component {...props} />
					) : (
						<Redirect to="/" />
					);
				}}
			/>
		);
	} else {
		return (
			<Route
				{...rest}
				render={props => {
					return authed === true ? (
						<Component {...props} />
					) : (
						<Redirect to="/login" />
					);
				}}
			/>
		);
	}
};
export default PrivateRoute;
