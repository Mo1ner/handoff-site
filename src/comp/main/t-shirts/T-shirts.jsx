import React from "react";

import "./t-shirts.css";
import Product from "./../Product";
import { productsT } from "../../inform/Information";

const TShirts = () => {
  return (
    <div className="tShirts">
      <div className="main-container">
        <div className="tShirts-inner">
          <Product product={productsT}></Product>
        </div>
      </div>
    </div>
  );
};

export default TShirts;
