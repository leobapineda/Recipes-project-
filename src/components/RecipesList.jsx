import React from "react";
import "../stylesheet/RecipesList.css";
import { Link } from "react-router-dom";

export default function RecipesList({
  data,
  AddFavouriteBtn,
  addFavouriteRecipe,
}) {
  const AddFavouritesComponent = AddFavouriteBtn;
  console.log("i am RecipesList 27");
  return (
    <div className="recipes-global__container">
      {data?.map((recipeItem) => {
        return (
          <article key={recipeItem.recipe.image} className="recipe__container">
            <Link
              key={recipeItem.recipe.image}
              to={`/${recipeItem?.recipe?.label}`}
              className="recipe__Link"
              state={{recipeItem: recipeItem.recipe}}
            >
              <img className="recipe__image" src={recipeItem.recipe.image} alt={recipeItem.recipe.label} />
              <div className="recipe__text-container">
                  <div className="recipe__meal-type">
                    {recipeItem.recipe.mealType[0]}
                  </div>
                  <h4 className="recipe__tittle">
                    {/* reduce the display text to 20 letters */}
                    {recipeItem.recipe.label.length < 20
                      ? `${recipeItem.recipe.label}`
                      : `${recipeItem.recipe.label.substring(0, 20)}...`}
                  </h4>
              </div>
            </Link>
            <div className="recipe__footer">
              <span className="recipe__cuisine-type">
                {recipeItem.recipe.cuisineType[0]}
              </span>
              <span onClick={() => addFavouriteRecipe(recipeItem)}>
                <AddFavouritesComponent />
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
