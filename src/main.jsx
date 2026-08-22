import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {CartProvider} from "./context/CartContext.jsx";
import "./index.css";
import App from "./App.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import ProductStatusProvider from "./context/ProductStatusContext.jsx";
import CategoryProvider from "./context/CategoryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <BrowserRouter>
         <CategoryProvider>
         <ProductStatusProvider>
        
       <CartProvider>
         <WishlistProvider>
          <App />
         </WishlistProvider>
        
        </CartProvider>
       
       </ProductStatusProvider>

       </CategoryProvider>
      </BrowserRouter>
    
  </StrictMode>
);