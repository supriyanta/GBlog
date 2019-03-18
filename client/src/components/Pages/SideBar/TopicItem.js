import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopicItem extends Component {
	render() {
		const { name, id } = this.props;
		return (
			<div>
				<Link to={`/topic/${id}`}>{name}</Link>
			</div>
		);
	}
}
export default TopicItem;
