import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ShopContext } from "./ShopContext";

function Header() {
  const { cart, cartIndex } = useContext(ShopContext);
  const [cartList, setCartList] = cart;
  const [cartLength, setCartLength] = cartIndex;
  return (
    <nav id="main-nav" className="flex m-auto">
      <Link to="/">
        <h1 className="fs2">A tidy shop</h1>
      </Link>
      <Link to="/cart">
        <h2 className="cart-icon relative">
          Cart{" "}
          <span id="cart-index" className="absolute white bg-hazel">
            {cartLength}
          </span>
        </h2>
      </Link>
    </nav>
  );
}

export default Header;
