import { React, useState } from "react";
import { Link } from "react-router-dom";
import RecipesList from "../components/RecipesList";
import AddFavouritesTest from "./AddFavouritesTest";

function Favorites({ obj }) {
  console.log(obj);

  return (
    <>
      <h1>
        Favorites
        <Link to="/"> go home</Link>
      </h1>

      <RecipesList data={obj} AddFavouriteBtn={AddFavouritesTest} />
    </>
  );
}
export default Favorites;
