import React from "react";

import ProductsList from "./ProductsList";
import "./styles.scss";

function App() {
  return (
    <div className="container m2">
      <h1 className="main-title m2">A tidy shop</h1>
      <ProductsList />
    </div>
  );
}

export default App;
