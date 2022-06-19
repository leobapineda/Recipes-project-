import { React, useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "../components/RecipesList";
import SearchBar from "../components/SearchBar";
import AddFavourites from "../components/AddFavourites";
import { Outlet } from "react-router-dom";
import Logo from "../images/logo8.png";
import "../stylesheet/Home.css";

function Home() {
  console.log("i am Home");

  const YOUR_APP_ID = "1225815e";
  const YOUR_APP_KEY = "e642963f4d2299d6ac085245011970ab";

  // const [food, setFood] = useState('');
  const [food, setFood] = useState(null);
  const [recipeData, setRecipeData] = useState(
    // null
    // ""
    JSON.parse(localStorage.getItem("localItem"))
  );
  const [submit, setSubmit] = useState("");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=balanced&random=false`;
  const [addFavourite, setAddFavourite] = useState([]);

  useEffect(() => {
    axios.get(`${url}`).then((APIdata) => {
      if(APIdata.data.hits.length > 0) {

        setRecipeData(APIdata.data.hits)
        
      } 
      
      else {
        
        setRecipeData(JSON.parse(localStorage.getItem("localItem")))
      }

    });
  }, [submit]);

  function handleChange(e) {
    setFood(e.target.value);
  }

  function setLocal() {
    const localJson = JSON.stringify(recipeData);
    localStorage.setItem("localItem", localJson);
  }

  setLocal();

  function hanbleSubmit(e) {
    e.preventDefault();
    setSubmit(food);
  }

  function addFavouriteFunc(recipe) {
    if (addFavourite === null) {
      let newFavourites = [recipe];
      setAddFavourite(newFavourites);
      saveToLocalStorage(newFavourites);
    } else {
      let newFavourites = [...addFavourite, recipe];
      setAddFavourite(newFavourites);
      saveToLocalStorage(newFavourites);
    }
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
      {recipeData?.length == 0 && (
        <div className="page-logo__container">
          <img className="page-logo" src={Logo} alt="page logo" />
          <h1 className="page__no-recipe">no recipes</h1>
        </div>
      )}
      {recipeData?.length !== 0 && (
        <RecipeList
          addFavouriteRecipe={addFavouriteFunc}
          data={recipeData}
          AddFavouriteBtn={AddFavourites}
        />
      )}

      <Outlet />
    </>
  );
}

export default Home;
