import { NavLink } from "react-router-dom";
import "./navigation.css";

const activeLinks = {
  backgroundColor: "#7e22ce",
  color: "#ede9fe",
};

const Navigation = () => {
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
          <li>
            <NavLink
              to="/cart"
              activeStyle={activeLinks}
              activeClassName="active"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
