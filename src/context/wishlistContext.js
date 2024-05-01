import React, { createContext, useState } from "react";
import jsonData from "../db/shopData.json";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [wishButton, setWishButton] = useState({});

  const handleWishButton = (productId) => {
    setWishButton((prevButtons) => ({
      ...prevButtons,
      [productId]: !prevButtons[productId],
    }));

    const findProduct = jsonData.glasses.find((item) => item.id === productId);
    if (findProduct) {
      if (wishButton[productId]) {
        const updatedWishList = wishList.filter(
          (item) => item.id !== productId
        );
        setWishList(updatedWishList);
      } else {
        setWishList([...wishList, findProduct]);
      }
    }
  };

  const handleRemoveWishList = (productId) => {
    const updatedWishList = wishList.filter((item) => item.id !== productId);
    setWishList(updatedWishList);
    setWishButton((prevButtons) => ({
      ...prevButtons,
      [productId]: false,
    }));
  };

  return (
    <WishlistContext.Provider
      value={{ wishList, wishButton, handleWishButton, handleRemoveWishList }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
