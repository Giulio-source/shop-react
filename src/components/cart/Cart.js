import _ from "lodash";
import React, { useContext } from "react";

import { ShopContext } from "../ShopContext";
import CartToggle from "./CartToggle";

function Cart() {
  const { cart } = useContext(ShopContext);
  const [cartList, setCartList] = cart;

  let grandTotal = 0;
  const arrayCart = _.values(cartList);

  const renderCart = arrayCart.map((product) => {
    grandTotal += product.price * product.quantity;
    return (
      <tr key={product.id + product.title}>
        <td>{product.title}</td>
        <td>€ {parseFloat(product.price).toFixed(2)}</td>
        <td className="quantity-cell flex jcenter">
          <CartToggle id={product.id} quantity={product.quantity} />
        </td>
        <td>€ {(product.price * product.quantity).toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <div id="table-container" className="max-70vw m-auto p1">
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          {renderCart}

          <tr>
            <td colSpan="3"></td>
            <td className="grand-total">€ {grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
