import React from "react";

import Product from "./../Product";
import { productsT } from "../../inform/Information";

const TShirts = () => {
  return (
    <div className="tShirts">
      <div className="main-container">
        <Product product={productsT}></Product>
      </div>
    </div>
  );
};

export default TShirts;
