import React from "react";
import "../stylesheet/RecipeIngridients.css";

function RecipeIngridients({ recipeData }) {
  const { ingredients } = recipeData;
  console.log(ingredients);
  return (
    <div className="ingredients__container" >
      <h1 className="ingredients__tittle" >Ingredients</h1>

        {ingredients.map((element, index) => {
          return (
            <div className="ingredients__ingredients" key={index}  >
                  <span className="ingredients__quantity"  >{`${ element.quantity} `}</span>
                  {element.measure && <span className="ingredients__measure"  >{`${ element.measure == "<unit>" ? "" : element.measure} `}</span>} 
                  <span className="ingredients__food" >{element.food}</span>
            </div>
          );
        })}
    </div>
  );
}

export default RecipeIngridients;
