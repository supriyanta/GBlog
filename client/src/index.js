import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
// client
// 	.query({
// 		query: gql`
// 			query Stories {
// 				stories(topicId: "5c820e7cc0b8020ea466ae00") {
// 					name
// 					id
// 					topic {
// 						name
// 						id
// 					}
// 				}
// 			}
// 		`
// 	})
// 	.then(result => console.log(result));
