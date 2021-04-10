import React, { useContext } from "react";

import { ShopContext } from "./ShopContext";

function Header() {
  const { cart, cartIndex } = useContext(ShopContext);
  const [cartList, setCartList] = cart;
  const [cartLength, setCartLength] = cartIndex;
  return (
    <nav id="main-nav" className="flex">
      <h1 className="fs2">A tidy shop</h1>
      <h2 className="cart-icon relative">
        Cart{" "}
        <span id="cart-index" className="absolute white bg-hazel">
          {cartLength}
        </span>
      </h2>
    </nav>
  );
}

export default Header;
