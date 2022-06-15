import { React, useState } from "react";
import RecipesList from "../components/RecipesList";
import RemoveFavouritesTest from "../components/RemoveFavouritesTest";

function Favorites({ obj }) {
  const [addFavourite, setAddFavourite] = useState([]);

  function addFavouriteFunc(recipe) {
    console.log('lol');
    setAddFavourite((prevAddFavouriteFunc) => [
      ...prevAddFavouriteFunc,
      recipe,
    ]);
  }

  return (
    <>
      <RecipesList 
      data={obj} 
      AddFavouriteBtn={RemoveFavouritesTest} 
      addFavouriteRecipe={addFavouriteFunc}
      
      />
    </>
  );
}
export default Favorites;
