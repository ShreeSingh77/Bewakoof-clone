import { createContext, useContext, useEffect, useState } from "react";

const ProductStatusContext = createContext();

function ProductStatusProvider({ children }) {
  const [productStatuses, setProductStatuses] = useState(() => {
    const savedStatuses = localStorage.getItem(
      "productStatuses"
    );

    return savedStatuses
      ? JSON.parse(savedStatuses)
      : {};
  });

  useEffect(() => {
    localStorage.setItem(
      "productStatuses",
      JSON.stringify(productStatuses)
    );
  }, [productStatuses]);

  // =========================
  // TOGGLE STATUS
  // =========================

  const toggleProductStatus = (productId, status) => {
    setProductStatuses((prev) => {
      const currentProduct = prev[productId] || {};

      return {
        ...prev,

        [productId]: {
          ...currentProduct,
          [status]: !currentProduct[status],
        },
      };
    });
  };

  // =========================
  // CHECK STATUS
  // =========================

  const isProductStatusActive = (
    productId,
    status
  ) => {
    return Boolean(
      productStatuses[productId]?.[status]
    );
  };

  return (
    <ProductStatusContext.Provider
      value={{
        productStatuses,
        toggleProductStatus,
        isProductStatusActive,
      }}
    >
      {children}
    </ProductStatusContext.Provider>
  );
}

export function useProductStatus() {
  const context = useContext(ProductStatusContext);

  if (!context) {
    throw new Error(
      "useProductStatus must be used inside ProductStatusProvider"
    );
  }

  return context;
}

export default ProductStatusProvider;