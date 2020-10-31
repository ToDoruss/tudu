import "./Value.css";
import React from "react";

export default function Value({ value }) {
  return (
    <li className="todo">
      <p className="todo__text">{value} </p>
    </li>
  );
}
