import { useState } from "react";

export default function Form({ setTuduObject }) {
  const [inputValue, setInputValue] = useState("");

  const getDate = () => {
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    return `${day}|${month}|${year}`;
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setTuduObject({
          text: inputValue,
          date: getDate(),
        });
      }}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="Was willst du dun?"
        className="todo__input"
      ></input>
    </form>
  );
}
