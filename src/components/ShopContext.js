import React, { useState, createContext } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cart, setCart] = useState({});

  return (
    <ShopContext.Provider
      value={{
        selected: [selectedProduct, setSelectedProduct],
        cart: [cart, setCart],
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
