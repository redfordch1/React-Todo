import React from "react";

class ToDoForm extends React.Component {
	state = {
		choreName: ""
	};

	handleChanges = (e) => {
		this.setState({
			choreName: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.choreName !== "") {
			this.props.addChore(this.state.choreName);
			this.setState({
				choreName: ""
			});
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					className="Form"
					onChange={this.handleChanges}
					type="text"
					name="chore"
					value={this.state.choreName}
				/>
				<button className="Button">Add</button>
			</form>
		);
	}
}

export default ToDoForm;
