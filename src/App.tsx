//import { ChangeEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Provider } from "react-redux";
/* import { WordOrder } from "./components/WordOrder";
import { WordReverseOrder } from "./components/WordReversOrder";*/
import "./App.css";
import { store } from "./components/store/store";
import { TodoList } from "./TodoList/TodoList";

/* import {
  InputContexProvider,
  InputContexNumberProvider,
} from "./components/context";
import { NumericMultiplyValue } from "./components/NumericMultiplyValue";
 */
function App() {
  /*const [count, setCount] = useState(0);
  const [inputValueState, setInputValueState] = useState("");
  const [inputNumberState, setInputNumberState] = useState(0);
  const [multiplyValue, setMultiplyValue] = useState(1);*/

  /*const clickCounterButton = () => {
    setCount(count + 1);
  };

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValueState(e.target.value);
  };
  const changeInputNumber = (e: ChangeEvent<HTMLInputElement>) => {
    console.log();
    setInputNumberState(parseInt(e.target.value));
  };
  const changeMultiplyNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setMultiplyValue(parseInt(e.target.value));
  };*/

  return (
    <Provider store={store}>
      {/*<InputContexProvider
      value={{ word: inputValueState, setWord: setInputValueState }}
    >
      <InputContexNumberProvider
        value={{ number: inputNumberState, setNumber: setInputNumberState }}
      >
  */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <TodoList />
      {/*<div className="card">
          <button onClick={clickCounterButton}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div>
          <label>Name: </label>
          <input onChange={changeInput} />
        </div>
        <div>
          <label>Number: </label>
          <input type="number" onChange={changeInputNumber} />
        </div>
        <div>
          <label>Number to multiply the first number: </label>
          <input
            value={multiplyValue}
            type="number"
            onChange={changeMultiplyNumber}
          />
        </div>
        <WordOrder />
<WordReverseOrder />*/}
      {/*<NumericMultiplyValue value={multiplyValue} />
      </InputContexNumberProvider>*/}
    </Provider>
  );
}

export default App;
