import React, { useState, createContext } from "react";

export const SelectedContext = createContext();

export const SelectedProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState();

  return (
    <SelectedContext.Provider value={[selectedProduct, setSelectedProduct]}>
      {children}
    </SelectedContext.Provider>
  );
};
