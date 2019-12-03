// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { useState } from "react";

const data = [
	{
		name: "Wash Car",
		id: 123,
		completed: false
	},
	{
		name: "Get Mail",
		id: 124,
		completed: false
	},
	{
		name: "Go Camping",
		id: 1235,
		completed: false
	}
];

const Todos = () => {
	const [ todos, setTodos ] = useState(data);
	const markTodo = (id, isComplete) => (e) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id !== id) return todo;
				return { id: todo.id, name: todo.name, complete: isComplete };
			})
		);
	};
	return (
		<div>
			{todos.map((todo) => (
				<div key={todo.id}>
					{todo.name} is {!todo.complete && "NOT "}completed
					<button onClick={markTodo(todo.id, true)}>Mark Complete</button>
					<button onClick={markTodo(todo.id, false)}>Mark Incomplete</button>
				</div>
			))}
		</div>
	);
};

export default Todos;
