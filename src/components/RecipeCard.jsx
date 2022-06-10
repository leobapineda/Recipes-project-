// rafce

import { React, useEffect, useState } from "react";
import "../stylesheet/RecipeCard.css";
import heart from "../images/heart-regular.svg";
import heart2 from "../images/heart-solid.svg";
import image from  '../images/placeholder-600x600.png'

export default function Recipe({ img, title, mealType, cuisineType }) {

    const [favorite, setFavorite] = useState(true)

    function addToFavorite() {
        setFavorite(favorite => !favorite)
    }

  return (
    <article className="recipe__container">
      <img src={img} alt="recipe img" />
      <div className="recipe__text-container">
        <div className="recipe__text-one">
          <div className="recipe__meal-type">{mealType}</div>
          <h4 className="recipe__tittle">{title}</h4>

        </div>
      </div>
      <div className="recipe__footer">
        <span className="recipe__cuisine-type">{cuisineType}</span>
        <img onClick={addToFavorite} className="heart-icon" src={favorite ? heart: heart2} alt="heart icon" />
      </div>
    </article>
  );
}
