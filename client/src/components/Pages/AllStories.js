import React, { Component } from "react";
import { graphql } from "react-apollo";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./SideBar/Sidebar";
import Story from "./Story/Story";
import { storiesAllQuery } from "../../schema/queries";

class AllStories extends Component {
	showStories = () => {
		const { loading, storiesAll } = this.props.data;
		if (loading) return null;
		return storiesAll.map(story => (
			<li key={story.id}>
				<Story name={story.name} description={story.description} />
			</li>
		));
	};
	render() {
		return (
			<div>
				<Navbar />
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
export default graphql(storiesAllQuery)(AllStories);
