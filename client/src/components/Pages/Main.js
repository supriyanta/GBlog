import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { graphql } from "react-apollo";
import PrivateRoute from "./PrivateRoute";
import Topic from "./Topic";
import AllStories from "./AllStories";
import SignIn from "../authPages/SignIn";
import SignUp from "../authPages/SignUp";
import CreateView from "./Create/CreateView";

import { authQuery } from "../../schema/localQueries";

class Main extends Component {
	render() {
		// console.log(this.props);
		const { isLoggedin: authed } = this.props.data;
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<PrivateRoute
							authed={authed}
							exact
							path="/"
							component={AllStories}
						/>
						<PrivateRoute
							authed={authed}
							exact
							path="/create"
							component={CreateView}
						/>
						<PrivateRoute
							authed={authed}
							exact
							path="/topic/:topicId"
							component={Topic}
						/>
						<PrivateRoute
							authed={authed}
							path="/login"
							component={SignIn}
						/>
						<PrivateRoute
							authed={authed}
							path="/register"
							component={SignUp}
						/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default graphql(authQuery)(Main);
