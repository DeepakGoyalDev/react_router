import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const HostVansLayout = () => {
  const [count, setCount] = useState(5);
  const activeStyle = {
    color: "#000000",
    textDecoration: "underline",
  };

  return (
    <div className="host-vans-details">
      <Link relative="path" to="..">
        {"<- Back to all vans"}
      </Link>
      <div className="host-vans-details-box">
        <h1>Details</h1>
        <nav>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={[count, setCount]} />
      </div>
    </div>
  );
};
export default HostVansLayout;
