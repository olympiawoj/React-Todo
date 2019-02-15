import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form className="todoForm">
        <input
          type="text"
          name="todoInput"
          onChange={this.handleChanges}
          value={this.state.todoInput}
          placeholder="Placeholder"
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
