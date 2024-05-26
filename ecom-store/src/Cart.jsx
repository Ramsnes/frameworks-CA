// Cart.jsx
import React from "react";
import { useCartContext } from "./CartContext";

function Cart() {
  const { products, removeProduct } = useCartContext();
  return (
    <div>
      <h2>My cart</h2>
      <p>List of added products:</p>
      {products.map((item) => (
        <div>
          <div key={item.id}>{JSON.stringify(item)}</div>
          <button onClick={() => removeProduct(item.id)}>Fjern</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
