import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todosArray = [
  {
    task: "Organize Garage",
    id: 123,
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
    //dont forgt to include this in notes
    e.preventDefault();

    const newTodoItem = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todosArray: [...this.state.todosArray, newTodoItem]
    });
  };

  toggleItem = itemId => {
    this.setState({
      todosArray: this.state.todosArray.map(item => {
        if (itemId === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    this.setState({
      todosArray: this.state.todosArray.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h2>{this.state.test}</h2>
        <TodoList
          todosArray={this.state.todosArray}
          toggleItem={this.toggleItem}
        />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
