import {React, useEffect, useState} from "react";
import '../stylesheet/RecipeCard.css'
import image from '../images/placeholder-600x600.png'
import heart from '../images/heart-regular.svg'
export default function Recipe({img, title, mealType, cuisineType}) {
    return(
        <article className="recipe__container" >
            <img src={img} alt="recipe img" />
            <div className="recipe__text-container">
                <div className="recipe__text-one" >
                    <div className="recipe__meal-type" >{mealType}</div>
                    <h4 className="recipe__tittle" >{title}</h4>
                </div>
                {/* <div  className="recipe__text-two" > */}
                    
            </div>
            <div className="recipe__footer" >
                        <span className="recipe__cuisine-type" >{cuisineType}</span>
                        <img className="heart-icon" src={heart} alt="heart icon" />
                    {/* </div> */}
                </div>
        </article>
    )   
}

// no se va hasta abajo, porque




