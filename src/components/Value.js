import "./Value.css";
import React from "react";

export default function Value({ value, setValues, values }) {
  return (
    <li
      className="value"
      onClick={(event) => {
        if (event.altKey) {
          const filteredArray = values.filter((item) => item !== value);
          setValues(filteredArray);
          console.log(filteredArray);
        } else {
          alert("To delete entry press the <Alt> Key.");
        }
      }}
    >
      {value}
    </li>
  );
}
