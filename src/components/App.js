import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProductsList from "./ProductsList";
import ProductDetail from "./ProductDetail";
import { SelectedProvider } from "./SelectedContext";
import Header from "./Header";
import "./styles.scss";

function App() {
  return (
    <SelectedProvider>
      <Router>
        <div>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div className="container m2">
            <Route path="/" exact>
              <h1 className="main-title m2">A tidy shop</h1>
              <ProductsList />
            </Route>

            <Route path="/detail">
              <ProductDetail />
            </Route>
          </div>
        </div>
      </Router>
    </SelectedProvider>
  );
}

export default App;
