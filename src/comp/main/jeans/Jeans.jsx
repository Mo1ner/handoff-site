import React from "react";

import Product from "../Product";
import { productsJ } from "../../inform/Information";

const Sweaters = () => {
  return (
    <div className="sweaters">
      <div className="main-container">
        <Product product={productsJ} />
      </div>
    </div>
  );
};

export default Sweaters;
