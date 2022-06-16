import { React, useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "../components/RecipesList";
import SearchBar from "../components/SearchBar";
import AddFavouritesTest from "../components/AddFavouritesTest";
import { Outlet } from "react-router-dom";


function Home() {
  const YOUR_APP_ID = "1225815e";
  const YOUR_APP_KEY = "e642963f4d2299d6ac085245011970ab";
  console.log('i am Home');

  const [addFavourite, setAddFavourite] = useState([]);

  const [food, setFood] = useState('');
  const [recipeData, setRecipeData] = useState(null);
  const [submit, setSubmit] = useState('');
  const url3 = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=balanced&random=false`;

  useEffect(() => {
    axios.get(`${url3}`).then((APIdata) => {
      setRecipeData(APIdata.data.hits);
    });
    console.log('api call');
  }, [submit]);

  function handleChange(e) {
    setFood(e.target.value);
  }

  function hanbleSubmit(e) {
    e.preventDefault();
    setSubmit(food);
  }

  function addFavouriteFunc(recipe) {
    const newFavourites = [...addFavourite, recipe];
    setAddFavourite(newFavourites);
    saveToLocalStorage(newFavourites);
  }

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-recipe-favourites")
    );
    setAddFavourite(movieFavourites);
  }, []);

  function saveToLocalStorage(favouritesList) {
    localStorage.setItem(
      "react-recipe-favourites",
      JSON.stringify(favouritesList)
    );
  }

  return (
    <>
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
      <Outlet />
    </>
  );
}

export default Home;
