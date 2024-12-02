import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import handWhite from "./../../img/icons/hand-white.png";
import hand from "./../../img/icons/hand.png";
import arrowWhite from "./../../img/icons/arrow-white.png";
import arrow from "./../../img/icons/arrow.png";

import "./sort.css";

const Sort = ({ theme, onSortChange }) => {
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [collectionMenuOpen, setCollectionMenuOpen] = useState(false);

  const [currentType, setCurrentType] = useState(() => {
    return localStorage.getItem("currentType") || "t-shirts";
  });

  const navigate = useNavigate();

  const handleCollectionMenu = () => {
    setCollectionMenuOpen(!collectionMenuOpen);
    console.log(collectionMenuOpen);
  };

  const handleSortMenu = () => {
    setSortMenuOpen(!sortMenuOpen);
    console.log(sortMenuOpen);
  };

  const handleCollectionChange = (type, route) => {
    setCurrentType(type);
    localStorage.setItem("currentType", type);
    navigate(route);
    setCollectionMenuOpen(false);
  };

  const handleSortChange = (order) => {
    onSortChange(order);
    setSortMenuOpen(false);
  };

  useEffect(() => {
    const savedRoute = `/${currentType}`;
    navigate(savedRoute);
  }, [currentType, navigate]);

  return (
    <div className="sort">
      <div className="main-container">
        <div className="sort-inner">
          {/* collection section */}
          <div className="collection-section">
            <div onClick={handleCollectionMenu} className="collection-img">
              <img src={theme ? hand : handWhite} alt="hanoff" />
            </div>
            <p>init collection</p>
            <p>({currentType})</p>

            {/* dropdown collection */}
            {collectionMenuOpen && (
              <div className="collection-dropdown">
                <div
                  className="collection-option"
                  onClick={() =>
                    handleCollectionChange("t-shirts", "/t-shirts")
                  }
                >
                  t-shirts
                </div>
                <div
                  className="collection-option"
                  onClick={() =>
                    handleCollectionChange("sweaters", "/sweaters")
                  }
                >
                  sweaters
                </div>
                <div
                  className="collection-option"
                  onClick={() => handleCollectionChange("jeans", "/jeans")}
                >
                  jeans
                </div>
                <div
                  className="collection-option"
                  onClick={() => handleCollectionChange("bags", "/bags")}
                >
                  bags
                </div>
              </div>
            )}
          </div>
          {/* sort section */}
          <div className="sort-section">
            <p>sort</p>
            <div
              onClick={handleSortMenu}
              className={`${
                sortMenuOpen ? "arrow-sort arrow-rotated" : "arrow-sort"
              }`}
            >
              <img src={theme ? arrow : arrowWhite} alt="arrow" />
            </div>

            {/* dropdown sort menu */}
            {sortMenuOpen && (
              <div className="sort-dropdown">
                <div
                  className="sort-option"
                  onClick={() => handleSortChange(null)}
                >
                  default order
                </div>
                <div
                  className="sort-option"
                  onClick={() => handleSortChange("high-to-low")}
                >
                  price: high to low
                </div>
                <div
                  className="sort-option"
                  onClick={() => handleSortChange("low-to-high")}
                >
                  price: low to high
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
