import _ from "lodash";
import React, { useContext } from "react";

import { ShopContext } from "./ShopContext";

function CartToggle({ id, quantity }) {
  const { cart, cartIndex } = useContext(ShopContext);
  const [cartList, setCartList] = cart;
  const [cartLength, setCartLength] = cartIndex;
  const handleAddQuantity = () => {
    const updatedItem = cartList[id];
    updatedItem.quantity = updatedItem.quantity + 1;
    setCartList({ ...cartList, [id]: updatedItem });
    setCartLength(cartLength + 1);
  };
  const handleRemoveQuantity = () => {
    const updatedItem = cartList[id];
    if (updatedItem.quantity > 1) {
      updatedItem.quantity = updatedItem.quantity - 1;
      setCartList({ ...cartList, [id]: updatedItem });
      setCartLength(cartLength - 1);
    } else {
      setCartLength(cartLength - 1);
      setCartList(_.omit(cartList, id));
    }
  };
  return (
    <>
      <button
        className="quantity-toggle white bg-hazel fs1 fw200"
        type="submit"
        onClick={handleRemoveQuantity}
      >
        -
      </button>
      {quantity}
      <button
        className="quantity-toggle white bg-hazel fs1 fw200"
        type="submit"
        onClick={handleAddQuantity}
      >
        +
      </button>
    </>
  );
}

export default CartToggle;
