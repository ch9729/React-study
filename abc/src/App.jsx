import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [number, setNumber] = useState(0);

  const upDateButton = (value) => {
    setNumber(number + value);
  };
  return (
    <>
      <Counter number={number} />
      <Button upDateButton={upDateButton} />
    </>
  );
}

export default App;
