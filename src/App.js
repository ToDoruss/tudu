import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import "./global.css";

function App() {
  const [tuduItems, setTuduItems] = useState([]);

  return (
    <div className="container">
      <Header />
      <Form tuduItems={tuduItems} setTuduItems={setTuduItems} />

      {tuduItems.length > 0 && (
        <Todolist tuduItems={tuduItems} setTuduItems={setTuduItems} />
      )}
    </div>
  );
}

export default App;
