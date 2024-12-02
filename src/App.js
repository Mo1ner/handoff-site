import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./comp/navbar/Navbar";
import Sort from "./comp/sort/Sort";

import Bags from "./comp/main/bags/Bags";
import TShirts from "./comp/main/t-shirts/T-shirts";
import Sweaters from "./comp/main/sweaters/Sweaters";
import Jeans from "./comp/main/jeans/Jeans";

import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light";
  });

  return (
    <Router>
      <div className="App">
        <Navbar theme={theme} setTheme={setTheme} />
        <Sort theme={theme} />
        <Routes>
          <Route path="/" element={<Navigate to="/t-shirts" />} />
          <Route path="/t-shirts" element={<TShirts />} />
          <Route path="/jeans" element={<Jeans />} />
          <Route path="/sweaters" element={<Sweaters />} />
          <Route path="/bags" element={<Bags />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
