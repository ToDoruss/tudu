import React from "react";

export default function Todo({ tuduObject }) {
  return (
    <li>
      <input type="checkbox"></input>
      {console.log("todotest", tuduObject)}
      {tuduObject?.text}
      {tuduObject?.date}
    </li>
  );
}
