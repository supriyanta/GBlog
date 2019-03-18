import React from "react";
import "./Story.css";

const Story = props => {
	const { name, description } = props;
	return (
		<div className="card shadow p-3 mb-3 bg-white rounded">
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">{description}</p>
			</div>
		</div>
	);
};
export default Story;
