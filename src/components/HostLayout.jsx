import React from "react";
import { NavLink, NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyle = {
    color: "#000000",
    fontWeight: "500",
  };

  return (
    <>
      <nav className="host-header">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          end
          to="."
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
