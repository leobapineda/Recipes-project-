import React from "react";
import "../stylesheet/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo7.png";

export default function Header() {

  return (
    <>
      <nav>
        <ul className="nav__ul">
          <li className="nav__hamburguer">
            <hr />
            <hr />
            <hr />
          </li>
          <li>
            <Link className="nav__logo" to="linguini-recipes/">
              <img src={logo} />
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
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
