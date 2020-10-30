import React from "react";

export default function Todo({ todoText = "Do stuff" }) {
  return (
    <li>
      <input type="checkbox"></input>
      {todoText}
    </li>
  );
}
