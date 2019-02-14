import React from "react";

class TodoForm extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
  }

  render() {
    return (
      <form class="todoForm">
        <input type="text" />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
