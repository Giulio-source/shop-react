import React, { useState, createContext } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartList, setCartList] = useState({});

  return (
    <ShopContext.Provider
      value={{
        selected: [selectedProduct, setSelectedProduct],
        cart: [cartList, setCartList],
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
