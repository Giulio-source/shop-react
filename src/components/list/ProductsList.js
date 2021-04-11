import React from "react";

import products from "../../data/data";
import ProductCard from "./ProductCard";

function ProductsList() {
  const renderedProducts = products.map((product) => {
    return <ProductCard product={product} />;
  });

  return (
    <div id="products-list" className="m-auto">
      {renderedProducts}
    </div>
  );
}

export default ProductsList;
