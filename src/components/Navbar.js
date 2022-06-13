import React from "react";
import '../stylesheet/Navbar.css'

export default function Header() {
    return(
        <nav>
            
            <ul className="ul" >
                <li>
                    <hr/>
                    <hr/>
                    <hr/>
                </li>
                <li><a href="/">Site Name</a></li>
                <li><a className="favorites" href="../Pages/Favorites">Favorites</a></li>
            </ul>
        </nav>
    )
}