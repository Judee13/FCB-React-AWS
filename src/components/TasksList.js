import { useState } from "react";
import Task from "./Task";

function TasksList() {
	const [taskItemsList, setTaskItemsList] = useState ([
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcam on Facebook.",
		"Follow Edukasyon.ph on Instagram.",
		"Follow AWS Siklab Pilipinas on Instagram.",
		"Follow Zuitt Coding Bootcam on Instagram."
	]);

	const [taskValue, setTaskValue] = useState("");
	console.log("taskValue: " + taskValue);
	
	const inputChangeHandler = (e) => {
		setTaskValue(e.target.value);

	};
	
	const addTaskHandler = (e) => {
		setTaskItemsList([taskValue, ...taskItemsList]);
		setTaskValue("");
	};

	return (
		<div>
			 <input
		        className="task-input"
		        placeholder="Create a new task"
		        onChange={inputChangeHandler}
		      	onBlur={addTaskHandler}
		      	value = {taskValue}
		      />
			    <ul>
			      	{taskItemsList.map((task , index) => {
			      		return <Task key={index} taskName={task} />;
			      	})}
			    </ul>
		</div>
	);
}

export default TasksList;