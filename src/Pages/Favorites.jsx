import { React, useState, useEffect } from "react";
import RecipesList from "../components/RecipesList";
import RemoveFavouritesTest from "../components/RemoveFavouritesTest";

function Favorites() {
  const [favouriteList, setFavouriteList] = useState();

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-recipe-favourites")
    );
    setFavouriteList(movieFavourites);
  }, []);

  function removeFavouriteFunc(recipeItem) {
    const newFavourites = favouriteList.filter(
      (item) => item.recipe.label !== recipeItem.recipe.label
    );
    setFavouriteList(newFavourites);
    saveToLocalStorage(newFavourites);
  }

  function saveToLocalStorage(newFavourites) {
    localStorage.setItem(
      "react-recipe-favourites",
      JSON.stringify(newFavourites)
    );
  }

  return (
    <>
      <RecipesList
        addFavouriteRecipe={removeFavouriteFunc}
        data={favouriteList}
        AddFavouriteBtn={RemoveFavouritesTest}
      />
    </>
  );
}
export default Favorites;
