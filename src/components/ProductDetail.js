import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { SelectedContext } from "./SelectedContext";

function ProductDetail() {
  const [selectedProduct, setSelectedProduct] = useContext(SelectedContext);
  return (
    <div id="product-detail">
      <div className="product-detail-image-container">
        <Link to="/">
          <div className="button-container flex jstart">
            <p className="button mb1">back to products</p>
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
