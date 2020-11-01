import React from "react";
import Todo from "./Todo";

export default function Todolist({ tuduItems, setTuduItems }) {
  return (
    <ul className="Todo__List">
      {tuduItems.map((todo) => (
        <Todo
          key={todo.id}
          tuduObject={todo}
          tuduItems={tuduItems}
          setTuduItems={setTuduItems}
        />
      ))}
    </ul>
  );
}
