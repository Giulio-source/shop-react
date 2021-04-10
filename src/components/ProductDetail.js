import React from "react";
import { Link } from "react-router-dom";

function ProductDetail() {
  return (
    <div>
      <Link to="/">
        <h1 className="button">back to products</h1>
      </Link>
    </div>
  );
}

export default ProductDetail;
