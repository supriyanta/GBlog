import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./reducers/rootReducer";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
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
