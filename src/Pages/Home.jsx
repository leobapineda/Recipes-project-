import { React, useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "../components/RecipesList";
import SearchBar from "../components/SearchBar";
import HeaderTest from "../components/HeaderTest";
import AddFavouritesTest from "../components/AddFavouritesTest";
import Favorites from "./Favorites";
import RemoveFavouritesTest from "../components/RemoveFavouritesTest";
import Header from "../components/Header";

function Home() {
  const YOUR_APP_ID = "1225815e";
  const YOUR_APP_KEY = "e642963f4d2299d6ac085245011970ab";

  const [addFavourite, setAddFavourite] = useState([]);

  const [food, setFood] = useState("");
  const [recipeData, setRecipeData] = useState(null);
  const [submit, setSubmit] = useState("");
  const url3 = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=balanced&random=false`;

  useEffect(() => {
    axios.get(`${url3}`).then((APIdata) => {
      setRecipeData(APIdata.data.hits);
    });
  }, [submit]);

  function handleChange(e) {
    setFood(e.target.value);
  }

  function hanbleSubmit(e) {
    e.preventDefault();
    setSubmit(food);
  }



  function addFavouriteFunc(recipe) {
    const newFavourites = [...addFavourite, recipe]
    setAddFavourite(newFavourites)
    saveToLocalStorage(newFavourites)
  }
  
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-recipe-favourites')
    )
    setAddFavourite(movieFavourites)
  }, [])

  function saveToLocalStorage(favouritesList) {
    localStorage.setItem('react-recipe-favourites', JSON.stringify(favouritesList))
  }

  function removeFavouriteFunc(recipe) {
    console.log(recipe);
    const newFavourites = addFavourite.filter((recipeItem) => {
      return(
        recipeItem.recipe.label != recipe.recipe.label
      )
    })
    setAddFavourite(newFavourites)
    saveToLocalStorage(newFavourites)
  }

  return (
    <>
      {/* <HeaderTest headingText="Linguini" /> */}
      <SearchBar
        hanbleSubmit={hanbleSubmit}
        handleChange={handleChange}
        food={food}
      />
      <RecipeList
        addFavouriteRecipe={addFavouriteFunc}
        data={recipeData}
        AddFavouriteBtn={AddFavouritesTest}
      />
    </>
  );
}

export default Home;
