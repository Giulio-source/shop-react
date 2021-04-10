import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ShopContext } from "./ShopContext";

function ProductDetail() {
  const { selected } = useContext(ShopContext);
  const [selectedProduct, setSelectedProduct] = selected;
  return (
    <div id="product-detail">
      <div className="product-detail-image-container">
        <Link to="/">
          <div id="back-button" className="button mb1">
            back to products
          </div>
        </Link>

        <img
          className="product-detail-image "
          src={selectedProduct.image}
          alt={selectedProduct.title}
        />
      </div>
      <div className="product-detail-content">
        <h3 className="product-detail-title fw200 transform-upper mb1">
          {selectedProduct.title}
        </h3>
        <h3 className="product-detail-price fw600 mb1 jstart">
          € {selectedProduct.price}
        </h3>
        <h3 className="product-detail-category fw400 transform-upper mb1 jstart">
          {selectedProduct.category}
        </h3>
        <p className="product-detail-description fw200">
          {selectedProduct.description}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
