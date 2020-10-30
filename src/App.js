import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import "./global.css";

function App() {
  // const [inputText, setInputText] = useState("");
  const [tuduObject, setTuduObject] = useState(null);
  console.log(tuduObject);
  return (
    <div className="container">
      <Header />
      <Form setTuduObject={setTuduObject} />
      {tuduObject && <Todolist tuduObject={tuduObject} />}
    </div>
  );
}

export default App;
