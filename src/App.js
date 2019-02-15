import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todosArray = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "DO THE THING",
    id: 15288170,
    completed: false
  },
  {
    task: "Do the other thing",
    id: 152858,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todosArray,
      test: "This is a test"
    };
  }

  addTodo = (e, item) => {
    //dont forgt to include this
    e.preventDefault();

    const newTodoItem = {
      task: item,
      id: Date.now(),
      purchased: false
    };

    this.setState({
      todosArray: [...todosArray, newTodoItem]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h2>{this.state.test}</h2>
        <TodoList todosArray={this.state.todosArray} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
