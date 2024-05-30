// Nav.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

function Nav() {
  const { products } = useCartContext();
  console.log(products);

  return (
    <nav>
      <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        <li style={{ margin: "0 10px" }}>
          <Link to="/" style={{ textDecoration: "none", padding: "10px 0" }}>
            Home
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/contact"
            style={{ textDecoration: "none", padding: "10px 0" }}
          >
            Contact
          </Link>
        </li>
        {/* Cart w/ icon  */}
        <li style={{ margin: "0 10px", display: "flex", alignItems: "center" }}>
          <Link
            to="/cart"
            style={{
              display: "flex",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={products.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
            <span style={{ marginLeft: "5px" }}>Cart</span>
          </Link>
        </li>
        {/* Cart end  */}
      </ul>
    </nav>
  );
}

export default Nav;
