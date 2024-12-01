import React from "react";

import Product from "../Product";
import { productsS } from "../../inform/Information";

const Sweaters = () => {
  return (
    <div className="sweaters">
      <div className="main-container">
        <Product product={productsS} />
      </div>
    </div>
  );
};

export default Sweaters;
