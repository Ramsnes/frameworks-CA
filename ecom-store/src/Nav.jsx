// Nav.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

function Nav() {
  const a = useCartContext();
  console.log(a);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
