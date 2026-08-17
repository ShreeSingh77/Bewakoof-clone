import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  // ===============================
  // LOAD CART FROM LOCAL STORAGE
  // ===============================

  const [cartItems, setCartItems] = useState(() => {

    try {

      const savedCart =
        localStorage.getItem("bewakoof_cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];

    } catch (error) {

      console.error(
        "Error loading cart:",
        error
      );

      return [];
    }

  });


  // ===============================
  // SAVE CART TO LOCAL STORAGE
  // ===============================

  useEffect(() => {

    localStorage.setItem(
      "bewakoof_cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);


  // ===============================
  // ADD TO CART
  // ===============================

  const addToCart = (product, size, colour) => {
  // Size validation
  if (product.sizes?.length > 0 && !size) {
    alert("Please select a size");
    return;
  }

  // Colour validation
  if (product.colours?.length > 0 && !colour) {
    alert("Please select a colour");
    return;
  }

  const cartId = `${product.id}-${size || "no-size"}-${colour || "no-colour"}`;

  setCartItems((prevItems) => {
    const existingItem = prevItems.find(
      (item) => item.cartId === cartId
    );

    // Same product + same size + same colour
    // => increase quantity
    if (existingItem) {
      return prevItems.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    // New cart item
    return [
      ...prevItems,
      {
        ...product,
        selectedSize: size || "",
        selectedColour: colour || "",
        cartId,
        quantity: 1,
      },
    ];
  });

  alert("Product added to bag!");
};


  // ===============================
  // REMOVE
  // ===============================

  const removeFromCart = (
    cartId
  ) => {

    setCartItems(
      (prevItems) =>
        prevItems.filter(
          (item) =>
            item.cartId !== cartId
        )
    );

  };


  // ===============================
  // INCREASE QUANTITY
  // ===============================

  const increaseQuantity = (
    cartId
  ) => {

    setCartItems(
      (prevItems) =>
        prevItems.map(
          (item) =>
            item.cartId === cartId
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
        )
    );

  };


  // ===============================
  // DECREASE QUANTITY
  // ===============================

 const decreaseQuantity = (cartId) => {
  setCartItems((prevItems) =>
    prevItems.map((item) => {
      if (item.cartId !== cartId) {
        return item;
      }

      return {
        ...item,
        quantity: Math.max(1, item.quantity - 1),
      };
    })
  );
};


  return (

    <CartContext.Provider
      value={{

        cartItems,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

      }}
    >

      {children}

    </CartContext.Provider>

  );

}


export function useCart() {

  return useContext(
    CartContext
  );

}