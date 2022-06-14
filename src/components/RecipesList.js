import { React, useEffect, useState } from "react";
import heart from "../images/heart-regular.svg";
import heart2 from "../images/heart-solid.svg";
import '../stylesheet/RecipesList.css'

export default function Recipe({ data }) {

  return (
    <div className="recipes-global__container">
      {data?.map((item) => {
        return(
          <article 
          key={item.recipe.image} 
          className="recipe__container">
          <img src={item.recipe.image} alt="recipe img" />
          <div className="recipe__text-container">
            <div className="recipe__text-one">
              <div className="recipe__meal-type">{item.recipe.mealType[0]}</div>
              <h4 className="recipe__tittle">{item.recipe.label}</h4>
            </div>
          </div>
          <div className="recipe__footer">
            <span className="recipe__cuisine-type">{item.recipe.cuisineType[0]}</span>
            <img
              // onClick={addToFavorite}
              className="heart-icon"
              src={heart}
              alt="heart icon"
            />
          </div>
        </article>
        )
      })}
      </div>

  );
}

{
  /* <article className="recipe__container">
      <img src={img} alt="recipe img" />
      <div className="recipe__text-container">
        <div className="recipe__text-one">
          <div className="recipe__meal-type">{mealType}</div>
          <h4 className="recipe__tittle">{title}</h4>
        </div>
      </div>
      <div className="recipe__footer">
        <span className="recipe__cuisine-type">{cuisineType}</span>
        <img
          onClick={addToFavorite}
          className="heart-icon"
          src={favorite ? heart : heart2}
          alt="heart icon"
        />
      </div>
    </article> */
}
