import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import { userLoginQuery } from "../../schema/queries";
import Header from "./Header";

import { loginMutation } from "../../schema/localQueries";

class SignIn extends Component {
	state = {
		email: "",
		password: "",
		error: ""
	};

	validate = () => {
		const { email, password } = this.state;
		if (email === "" || password === "") {
			this.setState({
				error: "email or password couldn't be empty"
			});
			return false;
		}
		return true;
	};
	handleSubmit = async e => {
		e.preventDefault();
		const { email, password } = this.state;
		if (this.validate()) {
			try {
				const response = await this.props.client.query({
					query: userLoginQuery,
					variables: { input: { email, password } }
				});
				console.log(response);
				// mutation: writes in local state in apollo cache
				this.props.mutate();
				this.props.history.push("/");
			} catch (err) {
				const errMsg = err.message.split(":")[1].trim();
				this.setState({ error: errMsg, password: "" });
			}
		}
	};

	render() {
		console.log("sign in", this.props);
		return (
			<div className="container">
				<Header />
				<p>SignIn</p>
				<form onSubmit={this.handleSubmit}>
					{this.state.error !== "" && (
						<div className="alert alert-danger" role="alert">
							{this.state.error}
						</div>
					)}

					<div className="form-group">
						<label htmlFor="exampleInputEmail1">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							value={this.state.email}
							onChange={e =>
								this.setState({ email: e.target.value })
							}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							value={this.state.password}
							onChange={e =>
								this.setState({ password: e.target.value })
							}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Sign In
					</button>
					<small className="ml-2 text-muted">
						Not yet registered? <Link to="/register">Sign Up</Link>
					</small>
				</form>
			</div>
		);
	}
}

const SignInView = withApollo(SignIn);
export default graphql(loginMutation)(SignInView);
