import React from "react";
import Todo from "./Todo";

export default function Todolist({ todoText = "Do Stuff" }) {
  return (
    <ul className="Todo__List">
      <Todo todoText={todoText}></Todo>
    </ul>
  );
}
