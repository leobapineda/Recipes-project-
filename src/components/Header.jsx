import React from "react";
import '../stylesheet/Header.css'

export default function Header() {
    return(
        <nav>
            <ul className="ul" >
                <li className="active" ><a className="about" href="../Pages/About.jsx">About</a></li>
                <li><a className="favorites" href="../Pages/Favorites.jsx">Favorites</a></li>
                <li><a className="pricing" href="../Pages/Pricing.jsx">Pricing</a></li>
            </ul>
        </nav>
    )
}