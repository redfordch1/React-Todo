import React from "react";

const Todo = (props) => {
	const handleClick = () => {
		props.toggleFinished(props.chore.id);
	};
	return (
		<div onClick={handleClick} className={`chore${props.chore.finished ? " finished" : ""}`}>
			<p>{props.chore.name}</p>
		</div>
	);
};

export default Todo;
