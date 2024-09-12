import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./Todo.css";

const data = [
	{
		name: "Wash Car",
		id: 1,
		finished: false
	},
	{
		name: "Get Mail",
		id: 2,
		finished: false
	},
	{
		name: "Go Camping",
		id: 3,
		finished: false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	constructor() {
		super();
		this.state = {
			chores: data
		};
		this.toggleFinished = this.toggleFinished.bind(this);
	}

	toggleFinished = (choreId) => {
		this.setState({
			chores: this.state.chores.map((chore) => {
				if (chore.id === choreId) {
					return {
						...chore,
						finished: !chore.finished
					};
				} else {
					return chore;
				}
			})
		});
	};

	clearChore = () => {
		this.setState({
			chores: this.state.chores.filter((chore) => {
				return !chore.finished;
			})
		});
	};

	addChore = (choreName) => {
		const newChore = {
			name: choreName,
			id: Date.now(),
			finished: false
		};
		this.setState({
			chores: [ ...this.state.chores, newChore ]
		});
	};

	render() {
		return (
			<div className="App">
				<h1>ToDo List</h1>
				<TodoForm addChore={this.addChore} />
				<TodoList
					chores={this.state.chores}
					toggleFinished={this.toggleFinished}
					clearChore={this.clearChore}
				/>
			</div>
		);
	}
}

export default App;
