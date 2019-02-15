import React from "react";

const TodoItem = props => {
  //   console.log("These are props", props);

  return (
    <div className="todoItem" onClick={() => props.toggleItem(props.item.id)}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default TodoItem;
