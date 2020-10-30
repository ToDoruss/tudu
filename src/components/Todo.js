import React from "react";

export default function Todo({ todoText }) {
  return (
    <li>
      <input type="checkbox"></input>
      {todoText}
    </li>
  );
}
