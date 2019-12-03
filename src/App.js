import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import ToDo from "./components/TodoComponents/Todo";

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	inputElement = React.createRef();

	constructor() {
		super();
		this.state = {
			items: [],
			currentItem: {
				text: "",
				key: ""
			}
		};
	}

	deleteItem = (key) => {
		const filteredItems = this.state.items.filter((item) => item.key !== key);
		this.setState({ items: filteredItems });
	};

	handleInput = (e) => {
		const itemText = e.target.value;
		const currentItem = { text: itemText, key: Date.now() };

		this.setState({
			currentItem
		});
	};

	addItem = (e) => {
		e.preventDefault();
		const newItem = this.state.currentItem;
		if (newItem.text !== "") {
			const items = [ ...this.state.items, newItem ];
			this.setState({
				items: items,
				currentItem: { text: "", key: "" }
			});
		}
	};

	render() {
		return (
			<div className="App">
				<h1>ToDo List</h1>
				<TodoList />
				<TodoForm
					addItem={this.addItem}
					inputElement={this.inputElement}
					handleInput={this.handleInput}
					currentItem={this.state.currentItem}
				/>
				<ToDo entries={this.state.items} deleteItem={this.state.deleteItem} />
			</div>
		);
	}
}

export default App;
