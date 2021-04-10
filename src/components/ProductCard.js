import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ShopContext } from "./ShopContext";

function ProductCard({ product }) {
  const { selected } = useContext(ShopContext);
  const [selectedProduct, setSelectedProduct] = selected;
  const handleOnSelect = () => {
    setSelectedProduct(product);
  };
  return (
    <Link
      to="/detail"
      className="product-card flex jcenter"
      onClick={handleOnSelect}
    >
      <div>
        <img
          className="product-card-image mb1"
          src={product.image}
          alt={product.title}
        />
        <h3 className="product-card-title mb1 fw200 transform-upper">
          {product.title}
        </h3>
        <h4 className="product-card-price mb1 fw600">€ {product.price}</h4>
        <h5 className="product-card-category mb1 fw400 transform-upper">
          {product.category}
        </h5>
      </div>
    </Link>
  );
}

export default ProductCard;
