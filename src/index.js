import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Task(props){
	return (
		<li className="tasks-item">{props.taskName}</li>
	);
}

function TasksList() {
	const taskItemList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcam on Facebook.",
		"Follow Edukasyon.ph on Instagram.",
		"Follow AWS Siklab Pilipinas on Instagram.",
		"Follow Zuitt Coding Bootcam on Instagram."

	];

	return (
	    <ul>
	      	{taskItemList.map((task , index) => {
	      		return <Task key={index} taskName={task} />;
	      	})}
	    </ul>
	);
}

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