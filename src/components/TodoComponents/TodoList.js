// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
	return (
		<div>
			{props.chores.map((chore) => <Todo key={chore.id} chore={chore} toggleFinished={props.toggleFinished} />)}
			<button className="Button2" onClick={props.clearChore}>
				Clear List
			</button>
		</div>
	);
};

export default TodoList;
