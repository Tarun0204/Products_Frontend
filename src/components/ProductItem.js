import React, { useState } from "react";
import starImg from "../assets/starImg.png";
import "../styles/Products.css";

const ProductItem = (props) => {
  const { productData } = props;
  const { title, price, image, description, rating } = productData;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <li className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p
        className={`product-description ${isExpanded ? "expanded" : "clamped"}`}
      >
        {description}
      </p>

      <button className="read-more-btn" onClick={toggleReadMore}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>

      <div className="product-details">
        <p className="price">$ {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating?.rate}</p>
          <img src={starImg} alt="star" className="star" />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
