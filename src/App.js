import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import "./global.css";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="container">
      <Header />
      <Form setInputText={setInputText} testProperty={"Testtext"} />
      <Todolist inputText={inputText} />
    </div>
  );
}

export default App;
