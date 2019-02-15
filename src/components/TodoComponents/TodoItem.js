import React from "react";

const TodoItem = props => {
  //   console.log("These are props", props);

  return (
    <div className="todoItem">
      <p>{props.item.task}</p>
    </div>
  );
};

export default TodoItem;
