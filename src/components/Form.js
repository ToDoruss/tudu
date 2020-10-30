import React, { useState } from "react";

export default function Form() {
  const [inputText, setInputText] = useState("Tu etwas!");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const input = document.querySelector(".todo__input"); // ToDo: Verschlanken?
        console.log(input.value);
      }}
    >
      <input
        type="text"
        placeholder="Was willst du dun?"
        className="todo__input"
      ></input>
    </form>
  );
}
