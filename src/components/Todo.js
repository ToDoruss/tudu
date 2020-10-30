import "./Todo.css";
import React from "react";

export default function Todo({ tuduObject }) {
  return (
    <li className="todo">
      <input className="todo__checkbox" type="checkbox"></input>

      <p className="todo__text">{tuduObject?.text} </p>
      <span className="todo__date">{tuduObject?.date} </span>
    </li>
  );
}
