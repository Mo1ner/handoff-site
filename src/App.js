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

  const [sortOrder, setSortOrder] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar theme={theme} setTheme={setTheme} />
        <Sort theme={theme} onSortChange={setSortOrder} />
        <Routes>
          <Route path="/" element={<Navigate to="/t-shirts" />} />
          <Route path="/t-shirts" element={<TShirts sortOrder={sortOrder} />} />
          <Route path="/jeans" element={<Jeans sortOrder={sortOrder} />} />
          <Route
            path="/sweaters"
            element={<Sweaters sortOrder={sortOrder} />}
          />
          <Route path="/bags" element={<Bags sortOrder={sortOrder} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
