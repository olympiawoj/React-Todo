import React from "react";
import "./Todo.css";

const TodoItem = props => {
  //   console.log("These are props", props);

  return (
    <div
      className={`todoItem ${props.item.completed ? "completed" : null}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default TodoItem;
