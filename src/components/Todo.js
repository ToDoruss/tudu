import "./Todo.css";
import React from "react";

export default function Todo({ tuduObject, tuduItems, setTuduItems }) {
  function handleRemove(id) {
    const newTuduItems = tuduItems.filter((item) => item.id !== id);
    setTuduItems(newTuduItems);
  }
  return (
    <li className="todo">
      <input className="todo__checkbox" type="checkbox"></input>

      <p className="todo__text">{tuduObject?.text} </p>
      <span className="todo__date">{tuduObject?.date} </span>
      <button
        className="todo__delete"
        onClick={() => handleRemove(tuduObject.id)}
      >
        ❌
      </button>
    </li>
  );
}
