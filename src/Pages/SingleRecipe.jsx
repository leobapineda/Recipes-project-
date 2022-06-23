import { React } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";
// necesitamos la informaicon de todas las busquedas
import "../stylesheet/SingleRecipe.css"
function SingleRecipe() {
  console.log("i am SingleRecipe 20");

  // ------>>>>>> useParams()
  // const { recipeName } = useParams();
  // const local = localStorage.getItem("localItem")
  // const localJson = JSON.parse(local)
  // const single = localJson?.find((recipe) => {
  //   return(recipe.recipe.label == recipeName)
  // })

  // console.log("this is getting the recipe from local storage");
  // console.log(single);
  // console.log("this is getting the state from useParams()");
  // console.log(recipeName);

  // ------>>>>>> useLocation()
  const { state } = useLocation();
  const { label, image, source, shareAs } = state.recipeItem;
  console.log("i am state");
  console.log(state);
  console.log("i am state.recipeItem");
  console.log(state.recipeItem);
  return (
    <div>
      <h1>recipes</h1>
      <div>{label}</div>
      <img style={{ width: "250px" }} src={image} />
      {" "}
      <div>
      <a target="_blank" href={shareAs}>
        View full recipe
      </a>
      </div>
      <p>Shared by {source}</p>
      
        <Link to= "/" >Back to home</Link> 
      {/* <Link to="/linguini-recipes">Back to home</Link>
      {/* ------>>>>>> useParams() */}
      {/* {`this is the recipe label using useParams():`} 
      <h1>{recipeName}</h1> */}
    </div>
  );
}

export default SingleRecipe;
