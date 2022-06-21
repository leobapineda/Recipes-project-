import { React, useEffect, useState } from "react";
import "../stylesheet/RecipesList.css";
import { Link } from "react-router-dom";

export default function RecipesList({
  data,
  AddFavouriteBtn,
  addFavouriteRecipe,
}) {
  const AddFavouritesComponent = AddFavouriteBtn;
  console.log("i am RecipesList 6");
  return (
    <div className="recipes-global__container">
      {data?.map((item) => {
        return (
          <article key={item.recipe.image} className="recipe__container">
            <Link
              key={item.recipe.image}
              to={`/${item?.recipe?.label}`}
              className="recipe__Link"
              obj = {item.recipe}
              state={{recipeItem: item.recipe}}
            >
              <img src={item.recipe.image} alt={item.recipe.label} />
              <div className="recipe__text-container">
                {/* Ver receta completa</Link> */}
                <div className="recipe__text-one">
                  <div className="recipe__meal-type">
                    {item.recipe.mealType[0]}
                  </div>
                  <h4 className="recipe__tittle">
                    {item.recipe.label.length < 20
                      ? `${item.recipe.label}`
                      : `${item.recipe.label.substring(0, 20)}...`}

                    {/* {item.recipe.label.split(' ')
                      .filter(function(n) { return n != '' })
                      .length} */}

                    

                    {/* {item.recipe.label.length } */}

                    {/* {item.recipe.label} */}
                  </h4>
                </div>
              </div>
            </Link>
            <div className="recipe__footer">
              <span className="recipe__cuisine-type">
                {item.recipe.cuisineType[0]}
              </span>
              <span onClick={() => addFavouriteRecipe(item)}>
                <AddFavouritesComponent />
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
