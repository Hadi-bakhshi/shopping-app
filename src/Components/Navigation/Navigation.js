import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useCart } from "../../context/CartProvider";
import "./navigation.css";

const activeLinks = {
  backgroundColor: "#7e22ce",
  color: "#ede9fe",
};

const Navigation = () => {
  const { cart } = useCart();
  const userData =useAuth()
  return (
    <header className="navigationHeader">
      <nav>
        <ul className="navigationLinks">
          <h3>Mahtisa shopping</h3>
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
          <li>
            <NavLink to="/products"
              activeStyle={activeLinks}
              activeClassName="active">
              Products
            </NavLink>
          </li>
        </ul>

        <ul className="navigationLinks">
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
          <li>
            <NavLink
              to={userData? "/profile" : "/login" }
              activeStyle={activeLinks}
              activeClassName="active"
            >
              {userData? "Profile" : "Login / Signup"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
