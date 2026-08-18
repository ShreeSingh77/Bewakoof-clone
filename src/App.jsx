import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Profile from "./pages/Profile.jsx";
import Addresses from "./pages/Addresses.jsx";
import Orders from "./pages/Orders.jsx";

import AdminProducts from "./pages/Admin/AdminProducts.jsx";
import { VerificationProvider } from "./context/VerificationContext.jsx";
function App() {
  return (
    <VerificationProvider>

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Hero />}
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* CART */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />
      
<Route path="/profile" 
element={<Profile />} />

<Route path="/orders" 
element={<Orders />}
/>

<Route path="/addresses"
   element={<Addresses />}
/>


        {/* WISHLIST */}
        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route 
        path="/admin/products"
        element={<AdminProducts />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<h1>Page Not Found</h1>}
        />

      </Routes>

      <Footer />
    </VerificationProvider>
  );
}

export default App;