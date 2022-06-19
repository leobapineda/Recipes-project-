import {React} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
// necesitamos la informaicon de todas las busquedas

function SingleRecipe() {
  console.log("i am SingleRecipe 3");
  const { state } = useLocation();
    const {label, image, source, shareAs} = state.recipeItem
    console.log("i am state");
  console.log(state);
    console.log("i am state.recipeItem");
    console.log(state.recipeItem);
  return (
    <div>
      <h1>single recipe</h1>
      <div>{label}</div>
      <img style={{width: "150px"}} src={image} />
      <a  target="_blank"  href={shareAs} >View full recipe</a>
      <p>Shared by {source}</p>
      <Link to='/' >Back to home</Link>
    </div>
  )
}

export default SingleRecipe
