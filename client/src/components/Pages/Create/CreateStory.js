import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import { topicsQuery, addStoryMutation } from "../../../schema/queries";

class CreateStory extends Component {
	state = {
		name: "",
		description: "",
		topicId: ""
	};

	displayTopics = () => {
		const { loading, topics } = this.props.topicsQuery;
		if (loading) {
			return null;
		}
		return topics.map(({ id, name }) => (
			<option key={id} value={id}>
				{name}
			</option>
		));
	};
	validate = () => {
		const { name, description, topicId } = this.state;
		if (name === "" || description === "" || topicId === "") {
			alert("Check all the fields");
			return false;
		}
		return true;
	};
	handleSubmit = e => {
		e.preventDefault();
		const { name, description, topicId } = this.state;
		if (this.validate()) {
			this.props.addStoryMutation({
				variables: { input: { name, description, topicId } }
			});
		}
		this.setState({ name: "", description: "", topicId: "" });
		this.props.history.push("/");
	};
	render() {
		// console.log(this.props);
		return (
			<div className="my-3 col-lg-5">
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							type="text"
							placeholder="Title"
							value={this.state.name}
							onChange={e =>
								this.setState({ name: e.target.value })
							}
						/>
					</div>
					<div>
						<textarea
							value={this.state.description}
							onChange={e =>
								this.setState({ description: e.target.value })
							}
							placeholder="Description"
							cols={30}
							rows={5}
						/>
					</div>
					<select
						value={this.state.topicId}
						onChange={e =>
							this.setState({ topicId: e.target.value })
						}
					>
						<option value="">choose a topic</option>
						{this.displayTopics()}
					</select>
					<div>
						<button>Add Story</button>
					</div>
				</form>
			</div>
		);
	}
}
export default compose(
	graphql(topicsQuery, { name: "topicsQuery" }),
	graphql(addStoryMutation, { name: "addStoryMutation" })
)(CreateStory);
