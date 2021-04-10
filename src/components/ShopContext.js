import React, { useState, createContext } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartList, setCartList] = useState({});
  const [cartLength, setCartLength] = useState(0);

  return (
    <ShopContext.Provider
      value={{
        selected: [selectedProduct, setSelectedProduct],
        cart: [cartList, setCartList],
        cartIndex: [cartLength, setCartLength],
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
