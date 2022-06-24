import React from "react";
import "../stylesheet/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo-navbar.png";
import heart from "../images/heart-solid.svg";

export default function Header() {
  return (
    <>
      <nav>
        <ul className="nav__ul">
          <li>
            <Link className="nav__logo" to="/">
              <img src={logo} alt={logo} />
              linguini
            </Link>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " nav__favorites active" : "nav__favorites"
              }
              to="/favorites"
            >
              Favorites
              <img
                src={heart}
                alt={heart}
                style={{
                  width: "15px",
                  position: "relative",
                  bottom: "-3px",
                  marginLeft: "5px",
                }}
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
