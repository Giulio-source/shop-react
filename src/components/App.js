import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProductsList from "./ProductsList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import { ShopProvider } from "./ShopContext";
import Header from "./Header";
import "./styles.scss";

function App() {
  return (
    <ShopProvider>
      <Router>
        <div>
          <Header />
          <div className="container m2">
            <Route path="/" exact>
              <ProductsList />
            </Route>
            <Route path="/detail">
              <ProductDetail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </div>
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
