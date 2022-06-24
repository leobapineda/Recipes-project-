import React from "react";
import heart from "../images/heart-solid.svg";
import "../stylesheet/Favourites.css";

function AddFavouritesTest() {
  return (
    <div className="favourite__container">
      <span className="favourite__text">Add</span>
      <img className="favourite__icon" src={heart} alt="heart icon" />
    </div>
  );
}

export default AddFavouritesTest;
