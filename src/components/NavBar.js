import React from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";

export default function NavBar() {
  return (
    <div className="page">
      <nav className="navbar">
        <ul className="ul">
          <li className="li">
            <NavLink to="/" exact to="/home">
              Home
            </NavLink>
          </li>
          <li className="li">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="li">
            <NavLink to="/discover">Discover</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
