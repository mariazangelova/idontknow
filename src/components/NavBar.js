import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/" exact to="/profile">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/discover">Discover</NavLink>
    </nav>
  );
}
