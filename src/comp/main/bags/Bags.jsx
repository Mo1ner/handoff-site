import React from "react";

import Product from "./../Product";
import { productsB } from "../../inform/Information";

const TShirts = () => {
  return (
    <div className="tShirts">
      <div className="main-container">
        <Product product={productsB}></Product>
      </div>
    </div>
  );
};

export default TShirts;
