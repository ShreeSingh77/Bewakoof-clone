import { createContext, useContext, useState } from "react";

const VerificationContext = createContext();

export function VerificationProvider({ children }) {
  const [verifiedProducts, setVerifiedProducts] = useState([]);

  const verifyProduct = (productId) => {
    setVerifiedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev;
      }

      return [...prev, productId];
    });
  };

  const unverifyProduct = (productId) => {
    setVerifiedProducts((prev) =>
      prev.filter((id) => id !== productId)
    );
  };

  const isProductVerified = (productId) => {
    return verifiedProducts.includes(productId);
  };

  return (
    <VerificationContext.Provider
      value={{
        verifiedProducts,
        verifyProduct,
        unverifyProduct,
        isProductVerified,
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
}

export function useVerification() {
  const context = useContext(VerificationContext);

  if (!context) {
    throw new Error(
      "useVerification must be used inside VerificationProvider"
    );
  }

  return context;
}