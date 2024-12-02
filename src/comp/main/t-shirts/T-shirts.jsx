import React, { useEffect, useState } from "react";

import Product from "./../Product";
import { productsT } from "../../inform/Information";

const TShirts = ({ sortOrder }) => {
  const [sortedProducts, setSortedProducts] = useState(productsT);

  useEffect(() => {
    if (!sortOrder) {
      setSortedProducts(productsT);
    } else {
      const sorted = [...productsT].sort((a, b) => {
        if (sortOrder === "high-to-low") return b.price - a.price;
        if (sortOrder === "low-to-high") return a.price - b.price;
        return 0;
      });

      setSortedProducts(sorted);
    }
  }, [sortOrder]);

  return (
    <div className="tShirts">
      <div className="main-container">
        <Product product={sortedProducts}></Product>
      </div>
    </div>
  );
};

export default TShirts;
