import React from "react";
import Todo from "./Todo";

export default function Todolist({ tuduObject }) {
  return (
    <ul className="Todo__List">
      <Todo tuduObject={tuduObject}></Todo>
    </ul>
  );
}
