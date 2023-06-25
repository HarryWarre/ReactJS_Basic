import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-md navbar bg-light"
      aria-label="Fourth navbar example">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand mb-0 h1">
          ShopCenter
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/iphone"
                className="nav-link active"
                aria-current="page">
                Iphone
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ipad"
                className="nav-link active"
                aria-current="page">
                Ipad
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/macbook"
                className="nav-link active"
                aria-current="page">
                Macbook
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
