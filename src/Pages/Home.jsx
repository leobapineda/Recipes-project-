import { React, useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "../components/RecipesList";
import SearchBar from "../components/SearchBar";
import AddFavourites from "../components/AddFavourites";
import { Outlet } from "react-router-dom";
import Logo from "../images/logo8.png"
import "../stylesheet/Home.css"

function Home() {
  const YOUR_APP_ID = "1225815e";
  const YOUR_APP_KEY = "e642963f4d2299d6ac085245011970ab";
  
  // const [food, setFood] = useState('');
  const [food, setFood] = useState(null);
  const [recipeData, setRecipeData] = useState(null);
  const [submit, setSubmit] = useState("");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=balanced&random=false`;
  const [addFavourite, setAddFavourite] = useState([]);
  useEffect(() => {
    axios.get(`${url}`).then((APIdata) => {
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
   
    // condicion que relaicone a la primera iteracion, la segunda vez ya no es indefinid
   if(addFavourite === null) {
      let newFavourites = [recipe];
      setAddFavourite(newFavourites);
      saveToLocalStorage(newFavourites);
      console.log('i am addFavourite null');
   } 
   else {
    let newFavourites = [...addFavourite, recipe];
      setAddFavourite(newFavourites);
      saveToLocalStorage(newFavourites);
      console.log('i am addFavourite');
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
      {(recipeData?.length == 0)  &&
        <div className="page-logo__container" >
          <img className="page-logo" src={Logo} alt="page logo" />
        </div>
      }
      {recipeData?.length !== 0 &&
      <RecipeList
      addFavouriteRecipe={addFavouriteFunc}
      data={recipeData}
      AddFavouriteBtn={AddFavourites}
    />
      }
      
      <Outlet />
    </>
  );
}

export default Home;
