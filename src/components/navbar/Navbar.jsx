import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h1>
            <NavLink className="link" to="/">
              {" "}
              Portfoliyo
            </NavLink>
          </h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/works">
                Works
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                Сontact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
