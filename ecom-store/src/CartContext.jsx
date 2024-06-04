// CartContext.jsx
import { createContext, useState, useContext } from "react";

const CartContext = createContext(null);

// CartProvider has the ability to gather, add, remove products. And where CartProvider is called, those places have those abilities
export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((arr) => {
      const existingProduct = arr.find((p) => p.id === product.id);

      if (existingProduct) {
        return arr.map((p) =>
          p.id === product.id ? { ...product, quantity: product.quantity } : p
        );
      }

      return [...arr, product];
    });
  };

  const removeProduct = (id) => {
    setProducts((products) => {
      return products.filter((product) => product.id !== id);
    });
  };

  const resetCart = () => setProducts([]);

  return (
    <CartContext.Provider
      value={{ products, addProduct, removeProduct, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custo, hook used in Cart.jsx
export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};
