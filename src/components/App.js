import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProductsList from "./list/ProductsList";
import ProductDetail from "./detail/ProductDetail";
import ScrollToTop from "./ScrollToTop";
import Cart from "./cart/Cart";
import { ShopProvider } from "./ShopContext";
import Header from "./Header";
import "./styles.scss";

function App() {
  return (
    <ShopProvider>
      <Router>
        <ScrollToTop />
        <div className="main-container max-70vw p2 m-auto">
          <Header />
          <div className="container">
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
