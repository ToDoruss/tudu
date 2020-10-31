import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import RealDecide from "./components/RealDecide";
import "./global.css";
import { choosOneRandom, setLocalStorage } from "./utils/helpers";

function App() {
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem("values")) || []
  );
  const [alreadyChoosen, setAlreadyChoosen] = useState(
    JSON.parse(localStorage.getItem("alreadyChoosen")) || []
  );
  const [theLuckyOne, setTheLuckyOne] = useState(
    JSON.parse(localStorage.getItem("theLuckyOne")) || ""
  );

  useEffect(() => {
    try {
      console.log("set in buttonclick");
      setLocalStorage(values, alreadyChoosen, theLuckyOne);
    } catch (error) {
      console.log(error);
    }
  }, [values, alreadyChoosen, theLuckyOne]);

  const moveFromValuesToAlreadyChoosen = (value) => {
    const valuesCleaned = values.filter((item) => item !== value);

    setValues(valuesCleaned);
    setAlreadyChoosen([...alreadyChoosen, value]);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Form
          setValues={setValues}
          setAlreadyChoosen={setAlreadyChoosen}
          setTheLuckyOne={setTheLuckyOne}
        />
        <hr />

        <div className="realDecideContainer">
          {/* <h2>wheelTitel</h2> */}
          <button
            className="button__reRun glow-on-hover"
            onClick={() => {
              if (values.length > 0) {
                const randomPerson = choosOneRandom(values);
                setTheLuckyOne(randomPerson);
                moveFromValuesToAlreadyChoosen(randomPerson);
              } else {
                setValues(alreadyChoosen);
                setTheLuckyOne(null);
                setAlreadyChoosen([]);
              }
            }}
          >
            ReRun
          </button>
          {theLuckyOne && (
            <>
              <h3>🚀 Its you! 👩‍🎤</h3>
              <h2>✨ {theLuckyOne} ✨</h2>
            </>
          )}
          <div className="valuesToChoose">
            {values.length > 0 && (
              <>
                <h2>👬👭 Participants 👬👭</h2>
                <RealDecide values={values} setValues={setValues} />
              </>
            )}
          </div>

          <div className="alreadyChoosen">
            {alreadyChoosen.length > 0 && (
              <>
                <h2>🎯 Already Choosen 🎯</h2>
                <RealDecide
                  values={alreadyChoosen}
                  setValues={setAlreadyChoosen}
                />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
