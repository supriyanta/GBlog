import React from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";

import { logoutMutation } from "../../../schema/localQueries";

const Navbar = props => {
	const signoutHandler = e => {
		e.preventDefault();
		// mutation: erase the user from local apollo cache
		props.mutate();
	};
	return (
		<div id="navbar">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="/">
					GBlog
				</a>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav ml-auto">
						<Link className="nav-item nav-link active" to="/create">
							<b>New</b>
							<span className="sr-only">(current)</span>
						</Link>
					</div>
					<div className="navbar-nav ml-auto">
						<a className="nav-item nav-link active" href="/">
							<button onClick={signoutHandler}>Sign Out</button>{" "}
							<span className="sr-only">(current)</span>
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default graphql(logoutMutation)(Navbar);
