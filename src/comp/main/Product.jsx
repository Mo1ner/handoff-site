import React from "react";
import "./product.css";

const Product = ({ product }) => {
  return (
    <>
      {product.map((item) => (
        <div key={item.id} className="product-card">
          <a className="product-img" href="#">
            <img src={item.image} alt={item.type} />
          </a>
          <h3 className="product-title">handoff init</h3>
          <p className="product-type">{item.type}</p>
          <p className="product-price">{item.price} $</p>
          <button className="add-to-cart">add to cart</button>
        </div>
      ))}
    </>
  );
};

export default Product;
