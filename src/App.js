import React from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState(0);

  const plusHandler = () => {
    setCounter(counter + 1);
  };

  const minusHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Счетчик :</h2>
        <h1>{counter}</h1>
        <button className="minus" onClick={minusHandler}>
          Минус -
        </button>
        <button className="plus" onClick={plusHandler}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
