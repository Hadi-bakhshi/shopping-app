import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import "./navigation.css";

const activeLinks = {
  backgroundColor: "#7e22ce",
  color: "#ede9fe",
};

const Navigation = () => {

  const {cart} = useCart()

  return (
    <header className="navigationHeader">
      <nav>
        <ul className="navigationLinks">
          <li>
            <NavLink
              to="/"
              activeStyle={activeLinks}
              activeClassName="active"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="cartLinkBadge">
            <NavLink
              to="/cart"
              activeStyle={activeLinks}
              activeClassName="active"
            >
              Cart
            </NavLink>
            <span className="cartCount">{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
