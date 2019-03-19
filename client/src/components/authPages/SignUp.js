import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { addUserMutation } from "../../schema/queries";
import Header from "./Header";

class SignUp extends Component {
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
				const response = await this.props.mutate({
					variables: { input: { email, password } }
				});
				console.log(response);
				this.props.history.push("/login");
			} catch (err) {
				console.log(err);
				const errMsg = err.message.split(":")[1].trim();
				this.setState({ error: errMsg, password: "" });
			}
		}
	};

	render() {
		return (
			<div className="container">
				<Header />
				<p>SignUp</p>
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
						Sign Up
					</button>
					<small className="ml-2 text-muted">
						Already registered? <Link to="/login">Sign In</Link>
					</small>
				</form>
			</div>
		);
	}
}
export default graphql(addUserMutation)(SignUp);
