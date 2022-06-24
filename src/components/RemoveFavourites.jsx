import React from "react";
import remove from "../images/icons/remove.svg";
import "../stylesheet/Favourites.css";

function AddFavouritesTest() {
  return (
    <div className="favourite__container remove">
      <span className="favourite__text">Remove</span>
      <img className="favourite__icon" src={remove} alt="remove icon" />
    </div>
  );
}

export default AddFavouritesTest;
