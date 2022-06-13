import {React, useState} from "react";
import { Link } from "react-router-dom";
import Recipe from "../components/RecipeCard";
// { img, title, mealType, cuisineType }
function Favorites({recipe}) {

// setFavorite(recipe)

  return (
    <>
    <div>
    </div>
      <h1>
        Favorites
        <Link to="/">go home</Link>
      </h1>
    </>
  );
}

export default Favorites;

// debe recibir un array de objetos, en base a ese objeto se populizan los resultaods.
// el objeto debe ser guardado en un estado, y cada vez que el estado sea activado se vuelve a renderizar todo el array.
// lograr empujar un objeto desde la pagina de home o desde recipeCard hasta Favorites