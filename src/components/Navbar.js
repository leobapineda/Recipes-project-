import React from "react";
import "../stylesheet/Navbar.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul className="ul">
        <li>
          <hr />
          <hr />
          <hr />
        </li>
        <li>
          <Link to="/">Linguini</Link>
        </li>
        <li>
          <Link to="favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
