import { React, useEffect, useState } from "react";
import axios from "axios";
import Recipe from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const YOUR_APP_ID = "1225815e";
  const YOUR_APP_KEY = "e642963f4d2299d6ac085245011970ab";
  
  const [food, setFood] = useState("");
  const [recipeName, setRecipeName] = useState(null);
  const [submit, setSubmit] = useState("");
  const url3 = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=balanced&random=false`;

  useEffect(() => {
    axios.get(`${url3}`).then((APIdata) => {
      setRecipeName(APIdata.data.hits);
      console.log(APIdata.data);
    });
  }, [submit]);

  let map = recipeName?.map((item) => {
    let recipeItem = item.recipe.ingredients.map((element) => {
      return (
        // <li key={element.text} >{element.text}</li>
        <li>{element.text}</li>
      );
    });

    return (
      <Recipe
        key={item.recipe.image}
        img={item.recipe.image}
        title={item.recipe.label}
        mealType={item.recipe.mealType[0]}
        cuisineType={item.recipe.cuisineType[0]}
      />
    );
  });

  function handleChange(e) {
    setFood(e.target.value);
  }

  function hanbleSubmit(e) {
    e.preventDefault();
    setSubmit(food);
  }
  return (
    <>
      <SearchBar
        hanbleSubmit={hanbleSubmit}
        handleChange={handleChange}
        food={food}
      />

      <div className="recipes__container">{map}</div>
    </>
  );
}

export default Home;
