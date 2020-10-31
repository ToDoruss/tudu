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
      <main className="main">
        <Form tuduItems={tuduItems} setTuduItems={setTuduItems} />
        <h2>wheelTitel</h2>
        {tuduItems.length > 0 && <Todolist tuduItems={tuduItems} />}
      </main>
    </div>
  );
}

export default App;
