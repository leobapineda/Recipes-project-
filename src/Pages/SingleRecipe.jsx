import {React} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// necesitamos la informaicon de todas las busquedas

function SingleRecipe() {
  console.log("i am SingleRecipe 20");
  const { state } = useLocation();
  // console.log("i am SingleRecipe 4");
  // const { recipeName } = useParams();
  // const local = localStorage.getItem("localItem")
  // const localJson = JSON.parse(local)
  // const single = localJson?.find((recipe) => {
  //   return(recipe.recipe.label == recipeName)
  // })

  // console.log("this is getting the recipe from local storage");
  // console.log(single);
  // console.log("this is getting the state from useLocation()");
  // console.log(recipeName);
    const {label, image, source, shareAs} = state.recipeItem
    console.log("i am state");
    console.log(state);
    console.log("i am state.recipeItem");
    console.log(state.recipeItem);
  return (
    <div>
    //   <h1>single recipe</h1>
    //   <div>{label}</div>
    //   <img style={{width: "150px"}} src={image} />
    //   <a  target="_blank"  href={shareAs} >View full recipe</a>
    //   <p>Shared by {source}</p>
    {/* //   <Link to= "linguini-recipes/" >Back to home</Link>  */}
    //   <Link to= "/linguini-recipes" >Back to home</Link> 
    {/* {`this is the recipe label using useParams():`}  */}
      {/* <h1>{recipeName}</h1> */}
    </div>
  )
}

export default SingleRecipe
