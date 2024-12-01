import Navbar from "./comp/navbar/Navbar";
import Sort from "./comp/sort/Sort";

import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light";
  });

  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} />
      <Sort theme={theme} />
    </div>
  );
}

export default App;
