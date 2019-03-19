import React, { Component } from "react";
import { graphql } from "react-apollo";

import { topicsQuery, addTopicMutation } from "../../../schema/queries";

class CreateTopic extends Component {
	state = {
		name: ""
	};
	handleSubmit = e => {
		e.preventDefault();
		if (this.state.name === "") {
			alert("You must add a Topic name");
			return;
		}
		this.props.mutate({
			variables: { name: this.state.name },
			refetchQueries: [{ query: topicsQuery }]
		});
		this.setState({ name: "" });
	};

	render() {
		return (
			<div className="col-lg-4 my-3">
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							type="text"
							placeholder="Name"
							value={this.state.name}
							onChange={e =>
								this.setState({ name: e.target.value })
							}
						/>
					</div>
					<button>Add Topic</button>
				</form>
			</div>
		);
	}
}
export default graphql(addTopicMutation)(CreateTopic);
