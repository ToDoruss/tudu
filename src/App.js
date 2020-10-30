import Form from "./components/Form";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import "./global.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Todolist />
    </div>
  );
}

export default App;
