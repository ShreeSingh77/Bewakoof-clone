import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  // ================= ADD =================

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return prevItems;
      }

      const updatedItems = [...prevItems, product];

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedItems)
      );

      return updatedItems;
    });
  };

  // ================= REMOVE =================

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.id !== id
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedItems)
      );

      return updatedItems;
    });
  };

  // ================= CHECK =================

  const isInWishlist = (id) => {
    return wishlistItems.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}