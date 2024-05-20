// Nav.jsx
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Individual product page</Link>
        </li>
        <li>
          <Link to="/">Cart page</Link>
        </li>
        <li>
          <Link to="/">Checkout success page</Link>
        </li>
        <li>
          <Link to="/">Contact page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
