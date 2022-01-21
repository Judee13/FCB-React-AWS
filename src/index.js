import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TasksList from "./components/TasksList"



function App(){
	const parastyle = {
	  "marginBottom": "2em"
	};

	return (
		<div className="app">
			<header className="app-header">
				<h1>ToDo-List App</h1>
				<p style={parastyle}>The most simple and amazing todo-list React app.</p>
				<TasksList />
			</header>
		</div>
		);
}

ReactDOM.render(<App />, document.getElementById("root"));