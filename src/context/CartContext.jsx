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

  const addToCart = (
    product,
    size,
    colour
  ) => {

    if (!size) {

      alert("Please select a size");

      return;
    }


    const newItem = {

      ...product,

      selectedSize: size,

      selectedColour: colour,

      cartId:
        `${product.id}-${size}-${colour}`,

      quantity: 1,

    };


    setCartItems((prevItems) => {

      const alreadyExists =
        prevItems.find(
          (item) =>
            item.cartId ===
            newItem.cartId
        );


      // If product already exists
      // increase quantity

      if (alreadyExists) {

        return prevItems.map(
          (item) =>
            item.cartId ===
            newItem.cartId
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
        );

      }


      return [
        ...prevItems,
        newItem,
      ];

    });


    alert(
      "Product added to bag!"
    );
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

  const decreaseQuantity = (
    cartId
  ) => {

    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.cartId === cartId
              ? {
                  ...item,
                  quantity:
                    item.quantity - 1,
                }
              : item
          )
          .filter(
            (item) =>
              item.quantity > 0
          )
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