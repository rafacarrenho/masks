import { useState } from "react";
import "./App.css";
import { moneyMask } from "./utils/masks/moneyMask";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={moneyMask(value)}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default App;
