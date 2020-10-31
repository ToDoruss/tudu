import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import RealDecide from "./components/RealDecide";
import "./global.css";
import { choosOneRandom } from "./utils/helpers";

function App() {
  const [values, setValues] = useState([]);
  const [alreadyChoosen, setAlredyChoosen] = useState([]);

  const moveFromValuesToAlreadyChoosen = (value) => {
    const valuesCleaned = values.filter((item) => item !== value);

    setValues(valuesCleaned);
    setAlredyChoosen([...alreadyChoosen, value]);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Form setValues={setValues} setAlreadyChoosen={setAlredyChoosen} />
        <div className="realDecide">
          <h2>wheelTitel</h2>
          <div className="valuesToChoose">
            {values.length > 0 && <RealDecide values={values} />}
          </div>
          <button
            className="button__reRun"
            onClick={() =>
              moveFromValuesToAlreadyChoosen(choosOneRandom(values))
            }
          >
            ReRun
          </button>
          <div className="alreadyChoosen">
            {alreadyChoosen.length > 0 && (
              <RealDecide values={alreadyChoosen} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
