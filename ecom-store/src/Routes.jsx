// Routes.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteNotFound from "./RouteNotFount";
import CartPage from "./Cart";
import ContactPage from "./Contact";
import Layout from "./Layout";
import Products from "./Products";
import Product from "./Product";
import { CartProvider } from "./CartContext";

function Routing() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Products />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default Routing;
