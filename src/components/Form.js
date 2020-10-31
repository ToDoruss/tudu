import "./Form.css";
import { useState } from "react";

export default function Form({ setValues, setAlreadyChoosen }) {
  const [inputValue, setInputValue] = useState("");
  const [separator, setSeparator] = useState(" ");

  function inputValueToArray(inputText, delimiter) {
    return inputText.split(`${delimiter}`);
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submitted");
        console.log("delimiter", separator);
        setAlreadyChoosen([]);
        setValues(inputValueToArray(inputValue, separator));
      }}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="Add Persons [SPACE] separated! or use the separator-Input"
        className="persons__input"
      />
      <input type="submit" value="Submit" />
      <div className="form__extras">
        <label htmlFor="persons__inputSeperator">seperator: </label>
        <input
          placeholder={separator}
          onChange={(event) => setSeparator(event.target.value)}
          id="persons__inputSeperator"
          type="text"
        />
      </div>
    </form>
  );
}
