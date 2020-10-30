import { useState } from "react";

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
        placeholder="Was willst du dun?"
        className="todo__input"
      ></input>
    </form>
  );
}
