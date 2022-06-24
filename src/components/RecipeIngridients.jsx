import React from "react";
import "../stylesheet/RecipeIngridients.css";

function RecipeIngridients({ recipeData }) {
  const { ingredients } = recipeData;
  console.log(recipeData);
  return (
    <div className="ingredients__container" >
      <h1 className="ingredients__tittle" >Ingredients</h1>

        {ingredients.map((element, index) => {
          return (
            <div className="ingredients__ingredients" key={index}  >
                  <span className="ingredients__food" >{element.food}</span>
                 <span className="test" >
                   <span className="ingredients__quantity"  >{`${( element.quantity).toFixed(1)} `}</span>
                  {element.measure && <span className="ingredients__measure"  >{`${ element.measure == "<unit>" ? "unit" : element.measure} `}</span>} 
                 </span>
            </div>
          );
        })}
    </div>
  );
}

export default RecipeIngridients;
