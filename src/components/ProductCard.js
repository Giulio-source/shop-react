import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        className="product-card-image mb1"
        src={product.image}
        alt={product.title}
      />
      <h3 className="product-card-title mb1">{product.title}</h3>
      <h4 className="product-card-price mb1">€ {product.price}</h4>
      <h5 className="product-card-category mb1">{product.category}</h5>
    </div>
  );
}

export default ProductCard;
