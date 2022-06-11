// rafce

import { React, useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./components/RecipeCard";
import './App.css'
import Header from "./components/Header";
// PAGES
import Favorites from "./Pages/Favorites";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";


export default function App() {

  const YOUR_APP_ID = "1225815e";
  const YOUR_APP_KEY = "e642963f4d2299d6ac085245011970ab";

  const [recipeName, setRecipeName] = useState(null);
  const [food, setFood] = useState('')
  const [submit, setSubmit] = useState('')
  const [generateKey, setGenerateKey] = useState(1)

  const url2 = "/api/recipes/v2?type=public&q=chicken&app_id=1225815e&app_key=e642963f4d2299d6ac085245011970ab&diet=balanced&random=false"

  const url3 = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=balanced&random=false`

 useEffect(() => {
  axios.get(`${url3}`)
  .then(APIdata => {
    setRecipeName(APIdata.data.hits)
    console.log(APIdata.data)
  })
  
 }, [submit])

 let map = recipeName?.map(item => {
  //  console.log(item.recipe.mealType);
  
   let recipeItem = item.recipe.ingredients.map(element => {
      return(
        // <li key={element.text} >{element.text}</li>
        <li >{element.text}</li>
      )
    })
    

   return(
      <Recipe 
        key={item.recipe.image}
        img = {item.recipe.image}
        title = {item.recipe.label}
        mealType = {item.recipe.mealType[0]}
        cuisineType = {item.recipe.cuisineType[0]}
        />
   )
 })

 function handleChange(e) {
    setFood(e.target.value)
 }

  function hanbleSubmit(e) {
    e.preventDefault()
    setSubmit(food)
    // console.log('submit');
  }

  let component;
  console.log(window.location.pathname);
  switch(window.location.pathname) {
    case '/':
      // this is just an example
      component = <Pricing />
    break
    case '/Pages/Favorites':
      component = <Favorites />

    break
    case '/Pages/About':
      component = <About />

    break
    case '/Pages/Pricing':
      component = <Pricing />

    break
  }

  return (
    <>
    <Header />
    {component}
    <h1>I am App page</h1>
    <form onSubmit={hanbleSubmit} >
      <label id="food" >Choose food</label>
      <input type='text'
      name="food input"
      placeholder="Find a recipe"
      className="form--input"
      onChange={handleChange}
      defaultValue={food}

      />
<button>Search</button>
    </form>
    
    <div className="recipes__container" >
        {/* {map} */}
    </div> 
  

    </>
  );
}
