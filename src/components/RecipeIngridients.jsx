import React from "react";

function RecipeIngridients({ recipeData }) {
  const { ingredients } = recipeData;
  console.log(ingredients);
  return (
    <div>
      <h1>What you'll need</h1>
      <div>
        <span>Ingredients</span>
        <span>quantity</span>
        <span>measure</span>
      </div>
      {ingredients.map((element) => {
        return (
          <div>
          </div>
        );
      })}
      <table>
        
      </table>
    </div>
  );
}

export default RecipeIngridients;
{/* <span>{element.food}</span>
            <span>{element.quantity}</span>
            <span>{element.measure}</span> */}