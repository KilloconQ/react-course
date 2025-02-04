import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);

  const sum = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={sum} />
    </>
  );
}

export default App;
