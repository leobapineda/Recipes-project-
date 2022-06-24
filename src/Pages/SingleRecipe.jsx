import { React } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../stylesheet/SingleRecipe.css";
import RecipeIngridients from "../components/RecipeIngridients";
function SingleRecipe() {
  const { state } = useLocation();
  console.log("i am state");
  console.log(state);
  const { label, image, source, shareAs } = state.recipeItem;
  console.log("i am state.recipeItem using useLocation()");
 console.log(state.recipeItem);

  return (
    <>
    <div className="singleRecipe_main-container">
      <div className="singleRecipe_text">
        <p className="singleRecipe_recipes">recipe</p>
        <h1 className="singleRecipe_tittle">{label}</h1>
        <div></div>
        <div>
          <div className="singleRecipe_source">
            BY <span> {source}</span>
          </div>
        </div>
        <a className="singleRecipe_source-link singleRecipe_btn " target="_blank" href={shareAs}>
          Full recipe
        </a>
        <h3 className="singleRecipe_servings">
          {" "}
          <span>{state.recipeItem.yield}</span> servings
        </h3>
        <Link className="singleRecipe_Link singleRecipe_btn" to="/">
          Back to home
        </Link>
      </div>
      <div className="singleRecipe_img-container">
        <img className="singleRecipe_img" 
        src={image} alt={`${label} img`}/>
      </div>
    </div>
    <RecipeIngridients 
    recipeData = {state.recipeItem}
    />
    </>
    
  );
}

export default SingleRecipe;
