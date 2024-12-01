import React, { useState } from "react";

import handWhite from "./../../img/icons/hand-white.png";
import hand from "./../../img/icons/hand.png";
import arrowWhite from "./../../img/icons/arrow-white.png";
import arrow from "./../../img/icons/arrow.png";

import "./sort.css";

const Sort = ({ theme }) => {
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [collectionMenuOpen, setCollectionMenuOpen] = useState(false);

  const handleCollectionMenu = () => {
    setCollectionMenuOpen(!collectionMenuOpen);
    console.log(collectionMenuOpen);
  };

  const handleSortMenu = () => {
    setSortMenuOpen(!sortMenuOpen);
    console.log(sortMenuOpen);
  };

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
            <p>(t-shirts)</p>

            {/* Dropdown collection */}
            {collectionMenuOpen && (
              <div className="collection-dropdown">
                <div
                  className="collection-option"
                  onClick={() => {
                    setCollectionMenuOpen(false);
                  }}
                >
                  t-shirts
                </div>
                <div
                  className="collection-option"
                  onClick={() => {
                    setCollectionMenuOpen(false);
                  }}
                >
                  sweaters
                </div>
                <div
                  className="collection-option"
                  onClick={() => {
                    setCollectionMenuOpen(false);
                  }}
                >
                  jeans
                </div>
                <div
                  className="collection-option"
                  onClick={() => {
                    setCollectionMenuOpen(false);
                  }}
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

            {/* Dropdown sort menu */}
            {sortMenuOpen && (
              <div className="sort-dropdown">
                <div
                  className="sort-option"
                  onClick={() => {
                    setSortMenuOpen(false);
                  }}
                >
                  price: high to low
                </div>
                <div
                  className="sort-option"
                  onClick={() => {
                    setSortMenuOpen(false);
                  }}
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
