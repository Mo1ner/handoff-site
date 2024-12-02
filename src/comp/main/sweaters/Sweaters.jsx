import React, { useState, useEffect } from "react";

import Product from "../Product";
import { productsS } from "../../inform/Information";

const Sweaters = ({ sortOrder }) => {
  const [sortedProducts, setSortedProducts] = useState(productsS);

  useEffect(() => {
    if (!sortOrder) {
      setSortedProducts(productsS);
    } else {
      const sorted = [...productsS].sort((a, b) => {
        if (sortOrder === "high-to-low") return b.price - a.price;
        if (sortOrder === "low-to-high") return a.price - b.price;
        return 0;
      });

      setSortedProducts(sorted);
    }
  }, [sortOrder]);

  return (
    <div className="sweaters">
      <div className="main-container">
        <Product product={sortedProducts} />
      </div>
    </div>
  );
};

export default Sweaters;
