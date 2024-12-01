import React from "react";

import "./sweaters.css";

import Product from "../Product";
import { productsS } from "../../inform/Information";

const Sweaters = () => {
  return (
    <div className="sweaters">
      <div className="main-container">
        <div className="sweaters-inner">
          <Product product={productsS} />
        </div>
      </div>
    </div>
  );
};

export default Sweaters;
