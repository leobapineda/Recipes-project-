import {React, useState, useEffect} from "react";
import "../stylesheet/Navbar.css";
import { Link } from "react-router-dom";


export default function Header() {

  // const [favoritesItems, setFavoritesItems] = useState(null)

  

  const [local, setLocal] = useState([])

  const movieFavourites = JSON.parse(
    localStorage.getItem("react-recipe-favourites")
  );

 useEffect(() => {
  setLocal(movieFavourites)
 }, [])

 console.log(local);

  return (
   
   <>
    <nav>
      <ul className="nav__ul">
        <li className="nav__hamburguer" >
          <hr />
          <hr />
          <hr />
        </li>
        <li>
          <Link className="nav__logo" to="/">linguini</Link>
        </li>
        <li>
          <Link className="nav__favorites" to="favorites">Favorites  </Link>
        </li>
      </ul>
    </nav>
   </>
  );
}
