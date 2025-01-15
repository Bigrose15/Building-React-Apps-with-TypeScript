import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
function App() {
  return (
    <div>
      <Greeting name="TypeScript" />
      <Counter />
    </div>
  );
}

export default App;