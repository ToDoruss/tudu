import { useState } from "react";
import "./Form.css";

export default function Form({ tuduItems, setTuduItems }) {
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
      className="todo__form"
      onSubmit={(event) => {
        event.preventDefault();

        setTuduItems([
          ...tuduItems,
          {
            id: Math.floor(Math.random() * 10000),
            text: inputValue,
            date: getDate(),
            done: false,
          },
        ]);
      }}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="Was willst du tun?"
        className="todo__input"
      ></input>
    </form>
  );
}
