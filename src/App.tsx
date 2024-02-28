import { useState } from "react";
import "./App.css";
import { cpfMask } from "./utils/masks/cpfMask";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={cpfMask(value)}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default App;
