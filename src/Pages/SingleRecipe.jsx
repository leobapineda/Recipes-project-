import {React} from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
// necesitamos la informaicon de todas las busquedas

function SingleRecipe() {
    console.log(useParams());
    // const {recipeName} = useParams()
    const { state } = useLocation();

    console.log(state);

    const {label, image, source, shareAs} = state
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
