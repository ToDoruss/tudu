import React from "react";
import Todo from "./Todo";

export default function Todolist({ inputText }) {
  return (
    <ul className="Todo__List">
      <Todo todoText={inputText}></Todo>
    </ul>
  );
}
