import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

// import Sidebar from "./SideBar/Sidebar";
import Topic from "./Topic";
import AllStories from "./AllStories";
import SignIn from "../authPages/SignIn";
import SignUp from "../authPages/SignUp";
import CreateView from "./Create/CreateView";

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

class Main extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<PrivateRoute
							authed={this.props.authed}
							exact
							path="/"
							component={AllStories}
						/>
						<PrivateRoute
							authed={this.props.authed}
							exact
							path="/create"
							component={CreateView}
						/>
						<PrivateRoute
							authed={this.props.authed}
							exact
							path="/topic/:topicId"
							component={Topic}
						/>
						<PrivateRoute
							authed={this.props.authed}
							path="/login"
							component={SignIn}
						/>
						<PrivateRoute
							authed={this.props.authed}
							path="/register"
							component={SignUp}
						/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		authed: state.isLoggedin
	};
};

export default connect(mapStateToProps)(Main);
