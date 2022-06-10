import {React, useEffect, useState} from "react";
import '../stylesheet/RecipeCard.css'
import image from '../images/placeholder-600x600.png'
import heart from '../images/heart-regular.svg'
export default function Recipe({img, title, type, origin}) {
    return(
        <div className="recipe__container" >
            <img src={image} alt="recipe img placeholder" />
            <div className="recipe__text-container">
                <div>dinner</div>
                <div>Tacos de canasta con todo</div>
                <div>
                    <span>Mexican</span>
                    <img className="heart" src={heart} alt="heart icon" />
                </div>
            </div>
        </div>
    )   
}
