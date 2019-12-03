import React from "react";

class TodoList extends React.Component {
	componentDidUpdate() {
		this.props.inputElement.current.focus();
	}

	render() {
		return (
			<div>
				<div>
					<form onSubmit={this.props.addItem}>
						<input
							placeholder="Task"
							ref={this.props.inputElement}
							value={this.props.currentItem.text}
							onChange={this.props.handleInput}
						/>
						<button type="submit">Add</button>
					</form>
				</div>
			</div>
		);
	}
}

export default TodoList;
