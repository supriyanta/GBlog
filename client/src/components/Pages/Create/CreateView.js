import React from "react";
import CreateStory from "./CreateStory";
import CreateTopic from "./CreateTopic";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/Sidebar";

const CreateView = ({ history }) => {
	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<CreateStory history={history} />
					<CreateTopic />
					<div className="col-lg-3">
						<SideBar />
					</div>
				</div>
			</div>
		</div>
	);
};
export default CreateView;
