import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "#000000",
    textDecoration: "underline",
  };

  return (
    <header className="header-box">
      <Link to={"/"}>#vanLife</Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
