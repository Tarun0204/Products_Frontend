import React from "react";
import "../styles/Marquee.css";

const Marquee = () => {
  const items = [
    "Product Listing Page",
    "Product Listing Page",
    "Product Listing Page",
    "Product Listing Page",
    "Product Listing Page",
  ];

  return (
    <div className="marquee-outer">
      <div className="marquee-inner">
        <div className="marquee-track">
          {items.map((text, index) => (
            <div key={index} className="marquee-item">
              {text}
            </div>
          ))}
          {items.map((text, index) => (
            <div key={`dup-${index}`} className="marquee-item">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
