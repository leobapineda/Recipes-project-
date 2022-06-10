import {React, useEffect, useState} from "react";
import '../stylesheet/RecipeCard.css'
import image from '../images/placeholder-600x600.png'
import heart from '../images/heart-regular.svg'
export default function Recipe({img, title, type, origin}) {
    return(
        <article className="recipe__container" >
            <img src={image} alt="recipe img placeholder" />
            <div className="recipe__text-container">
                <div className="recipe__meal-type" >dinner</div>
                <h4 className="recipe__tittle" >Tacos de canasta con todo</h4>
                <div className="recipe__footer" >
                    <span className="recipe__cuisine-type" >Mexican</span>
                    <img className="heart" src={heart} alt="heart icon" />
                </div>
            </div>
        </article>
    )   
}




