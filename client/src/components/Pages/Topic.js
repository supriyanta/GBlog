import React, { Component } from "react";
import { graphql } from "react-apollo";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./SideBar/Sidebar";
import Story from "./Story/Story";
import { storiesQuery } from "../../schema/queries";

class Topic extends Component {
	showStories = () => {
		const { loading, stories } = this.props.data;
		if (loading) return null;
		return stories.map(story => (
			<li key={story.id}>
				<Story name={story.name} description={story.description} />
			</li>
		));
	};
	render() {
		return (
			<div>
				<Navbar />
				{/* <p>{this.props.match.params.topicId}</p>*/}
				<div className="row">
					<div className="col-lg-9">
						<ul>{this.showStories()}</ul>
					</div>
					<div className="col-lg-3">
						<Sidebar />
					</div>
				</div>
			</div>
		);
	}
}
export default graphql(storiesQuery, {
	options: ({ match: { params } }) => {
		return {
			variables: {
				id: params.topicId
			}
		};
	}
})(Topic);
