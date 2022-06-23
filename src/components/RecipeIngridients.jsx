import React from "react";
import "../stylesheet/RecipeIngridients.css";

function RecipeIngridients({ recipeData }) {
  const { ingredients } = recipeData;
  console.log(ingredients);
  return (
    <div>
      <h1>Ingredients</h1>

      {/* {ingredients.map((element) => {
        return (
          <div>

          </div>
        );
      })} */}
      <table className="table"
      cellSpacing="0"
      >
        <thead className="thead" >
          <th>Ingredients</th>
          <th>quantity</th>
          <th>measure</th>
        </thead>
        {ingredients.map((element, index) => {
          return (
            <>
            <tr className="tr"  key={index} >
              <td className="td1" >{element.food}</td>
              <td className="td" >{element.quantity}</td>
              <td className="td" >{element.measure}</td>
            </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default RecipeIngridients;
