import React from "react";
import '../stylesheet/Header.css'

export default function Header() {
    return(
        <nav>
            
            <ul className="ul" >
                <li><a href="/">Site Name</a></li>
                <li className="active" ><a className="about" href="../Pages/About">About</a></li>
                <li><a className="favorites" href="../Pages/Favorites">Favorites</a></li>
                <li><a className="pricing" href="../Pages/Pricing">Pricing</a></li>
            </ul>
        </nav>
    )
}