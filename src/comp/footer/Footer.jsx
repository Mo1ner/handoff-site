import React from "react";
import "./footer.css";

import hand from "./../../img/icons/hand.png";
import whiteHand from "../../img/icons/hand-white.png";

const Footer = ({ theme }) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-img">
            <img src={theme ? hand : whiteHand} alt="hand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
