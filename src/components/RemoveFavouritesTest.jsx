import React from "react";
import remove from "../images/icons/remove.svg";
import "../stylesheet/AddFavouritesTest.css";

function AddFavouritesTest() {


  return (
    <div className="favourite__container">
      <span className="favourite__text">Remove</span>
      <img className="favourite__icon" src={remove} alt="heart icon" />
    </div>
  );
}

export default AddFavouritesTest;
