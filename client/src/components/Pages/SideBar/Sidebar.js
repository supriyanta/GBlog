import React, { Component } from "react";
import "./Sidebar.css";
import { graphql } from "react-apollo";

import TopicItem from "./TopicItem";
import { topicsQuery } from "../../../schema/queries";

class Sidebar extends Component {
	displayTopics = () => {
		// console.log(this.props.data);
		const { topics, loading } = this.props.data;
		if (loading) return <li>Loading...</li>;
		return topics.map(({ id, name }) => (
			<li key={id}>
				<TopicItem name={name} id={id} />
			</li>
		));
	};

	render() {
		return (
			<div id="sidebar">
				<p>Topics</p>
				<ul>{this.displayTopics()}</ul>
			</div>
		);
	}
}
export default graphql(topicsQuery)(Sidebar);
