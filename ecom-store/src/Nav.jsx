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
          <Link to="/cart">Cart page</Link>
        </li>
        <li>
          <Link to="/contact">Contact page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
