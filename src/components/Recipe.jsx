import {React, useEffect, useState} from "react";

export default function Recipe({title}) {

    // const APP_ID = '12762b41';
    // const APP_KEY = '17db636176a11fa3bf37ae9d8d2ef120'
    // const example = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
    
    // // fetch(`https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`)
    // // fetch('https://pokeapi.co/api/v2/type/1/')
    // .then(response => response.json())
    // .then(apiData => console.log(apiData))

    return(
        <div>
            <div>{title}</div>
        </div>
    )   
}
