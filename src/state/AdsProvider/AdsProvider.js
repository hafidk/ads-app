import React, { createContext, useState, useContext } from "react";

const AdsContext = createContext();

export const useAdsContext = () => {
  return useContext(AdsContext);
};

export const AdsProvider = ({ children }) => {
  const [adsByProduct, setAdsByProduct] = useState({}); // Use an object to store ads by product

  // Function to add an ad for a specific product ID
  const addAdForProduct = (productId, newAd) => {
    setAdsByProduct(prevAdsByProduct => ({
      ...prevAdsByProduct,
      [productId]: prevAdsByProduct[productId] ? [...prevAdsByProduct[productId], newAd] : [newAd]
    }));
  };

  // Function to delete ads for a specific product ID
  const deleteAdsForProduct = (productId) => {
    setAdsByProduct(prevAdsByProduct => {
      const newAdsByProduct = { ...prevAdsByProduct };
      delete newAdsByProduct[productId];
      return newAdsByProduct;
    });
  };

  return (
    <AdsContext.Provider value={{ adsByProduct, addAdForProduct, deleteAdsForProduct }}>
      {children}
    </AdsContext.Provider>
  );
};
