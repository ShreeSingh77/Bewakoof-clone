import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";


import Products from "./pages/Products";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="*"
          element={<h1>Page Not Found</h1>}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;