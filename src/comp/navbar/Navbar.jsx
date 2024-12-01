import React, { useEffect, useState } from "react";

import sun from "./../../img/sun-white.png";
import moon from "./../../img/moon.png";

import "./navbar.css";

const Navbar = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme) {
      document.body.classList.add("white-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("white-theme");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <a href="#">handoff</a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#">cart</a>
              </li>
              <li className="language-switch">
                <a href="#">ru</a>
                <a href="#">en</a>
              </li>
              <li>
                <img
                  onClick={toggleTheme}
                  src={`${theme ? moon : sun}`}
                  alt="light-dark"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
