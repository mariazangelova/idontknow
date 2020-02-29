import React from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";

export default function NavBar() {
  return (
    <div className="page">
      <nav className="navbar">
        <ul className="ul">
          <NavLink to="/" exact to="/home">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/discover">Discover</NavLink>
        </ul>
      </nav>
    </div>
  );
}
