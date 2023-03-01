import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    console.log(props)
  return (
    <ul className="m-8 p-0 w-160">
      {props.items.map((item) => (
       <TodoItem key={item.id} text={item.text}/>
      ))}
    </ul>
  );
};

export default Todos;
