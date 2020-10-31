import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import RealDecide from "./components/RealDecide";
import "./global.css";
import "./components/Sets.css";
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
  const [sets, setSets] = useState(
    JSON.parse(localStorage.getItem("sets")) || []
  );
  const [setName, setSetName] = useState("");

  useEffect(() => {
    try {
      console.log("set in buttonclick");
      setLocalStorage(values, alreadyChoosen, theLuckyOne, sets);
    } catch (error) {
      console.log(error);
    }
  }, [values, alreadyChoosen, theLuckyOne, sets]);

  const moveFromValuesToAlreadyChoosen = (value) => {
    const valuesCleaned = values.filter((item) => item !== value);

    setValues(valuesCleaned);
    setAlreadyChoosen([...alreadyChoosen, value]);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <details className="setList">
          <summary>Sets</summary>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              setSets([
                ...sets,
                {
                  name: setName,
                  values: values,
                  alreadyChoosen: alreadyChoosen,
                  theLuckyOne: theLuckyOne,
                },
              ]);
            }}
          >
            <input
              type="text"
              placeholder=" Save current as set"
              onChange={(event) => {
                setSetName(event.target.value);
              }}
            ></input>
          </form>
          {sets?.map((set) => {
            return (
              <button
                key={set.name}
                className="setList__set"
                onClick={(event) => {
                  event.preventDefault();
                  console.log(event);
                  if (event.altKey) {
                    setSets(() => {
                      const cleanedArray = sets.filter(
                        (setItem) => setItem.name !== set.name
                      );
                      setSets(cleanedArray);
                    });
                  } else {
                    setValues(set.values);
                    setAlreadyChoosen(set.alreadyChoosen);
                    setTheLuckyOne(set.theLuckyOne);
                  }
                }}
              >
                <p>{set.name}</p>
              </button>
            );
          })}
        </details>
        <Form
          setValues={setValues}
          setAlreadyChoosen={setAlreadyChoosen}
          setTheLuckyOne={setTheLuckyOne}
        />

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
              <h2 className="theLuckyOne">✨ {theLuckyOne} ✨</h2>
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
