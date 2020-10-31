import "./Form.css";
import { useState } from "react";

export default function Form({ setValues, setAlreadyChoosen }) {
  const [inputValue, setInputValue] = useState("");
  const [delimiter, setDelimiter] = useState(" ");

  function inputValueToArray(inputText, delimiter) {
    return inputText.split(`${delimiter}`);
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submitted");
        console.log("delimiter", delimiter);
        setAlreadyChoosen([]);
        setValues(inputValueToArray(inputValue, delimiter));
      }}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="Add Persons comma,separated!"
        className="persons__input"
      />
      <input type="submit" value="Submit" />
      <div className="form__extras">
        <label htmlFor="persons__inputDelimiter">Delimiter</label>
        <input
          placeholder={delimiter}
          onChange={(event) => setDelimiter(event.target.value)}
          id="persons__inputDelimiter"
          type="text"
        />
      </div>
    </form>
  );
}
