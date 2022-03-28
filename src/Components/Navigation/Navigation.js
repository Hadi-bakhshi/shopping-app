import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useCart } from "../../context/CartProvider";
import "./navigation.css";
import { BsFillMoonFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import useWindowSize from "../../hooks/useWindowSize";
import Sidebar from "../Sidebar/Sidebar";

const activeLinks = {
  backgroundColor: "#7e22ce",
  color: "#ede9fe",
};



const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();

  const page  = useWindowSize();

  return (
    <header className="navigationHeader">
      <nav>
        {/* logo and menu for small screens */}
        <div className="logo-menu">
          {/* Hamburger menu */}
          <div className="ham-menu">
            
            {page.isMobile ? <Sidebar/> : null}
          </div>
          {/* logo */}
          <div className="nav-logo">
            <BsFillMoonFill />
          </div>
        </div>
        {/* navbar items and links */}
        <div className="navbar-links">
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
            <li>
              <NavLink
                to="/products"
                activeStyle={activeLinks}
                activeClassName="active"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>

        {/* cart icon and number of items in cart  */}
        <div className="navigationLinks">
          <div className="cartLinkBadge">
            <NavLink
              to="/cart"
              activeStyle={activeLinks}
              activeClassName="active"
            >
              <BsCart3 />
            </NavLink>
            <span className="cartCount">{cart.length}</span>
          </div>
          {/* sign up and login */}
          <div>
            <NavLink
              to={userData ? "/profile" : "/login"}
              activeStyle={activeLinks}
              activeClassName="active"
            >
              {userData ? <BsFillPersonFill /> : "Login / Signup"}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
