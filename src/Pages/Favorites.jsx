import { React, useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "../components/RecipeCard";
// import heart from "../images/heart-regular.svg";
// import heart2 from "../images/heart-solid.svg";
// { img, title, mealType, cuisineType }
// function Favorites({ img, title, mealType, cuisineType }) {
function Favorites(props) {
  // setFavorite(recipe)

  const url =
    "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLWVhc3QtMSJHMEUCIQCNHzLcS%2BOkU7jJIQxScgu8j9gaUdBWKdi79Xk0iqoXJAIgLbzZJrr5gdLjO%2BPSIDgFMj%2FT2JpuhkNSxOK1b%2FmduEwq0gQIfRAAGgwxODcwMTcxNTA5ODYiDNiFnhD%2FzHqfVsu9MSqvBI0eiKQ2oWnbw0Z6EzqbaaRJc6d%2BDOCBxdX%2Fc7elAn%2FiF4%2FwHjAUri%2F6KpKciqSWVbz5uPAdLaMYEtd5ZafcS83WJX30P1tbon5K3oymu1AkBa0Vs8KLjejH8Ge8dbRJqgsN1uveM318HCM3W2WgVW8%2F37bnCSkZX7Rg7lluIkirUoVOgeVNADsf%2Fr35WsNZasJR1%2Bq3jn5mkCP5gFjsmRWSIP29yN4uG4RdVyzh9eHln9WJQcaPi4UAWCZx4dLJrNIwjJh4GGQoM8x9oUPHmgDKl0cZCb6Gw91KQTFYa3xs0GzUoE7A0K2KG6KF4Ac6%2FADyp6nYQ2dPtgLWaZJNmqdTosTYcmAD9PrnGNhF4p8NZsC%2Fs62wRAWEYbYtrPUbQMLXIOoD0rnLa%2FNizsCwxmK25rydRwi4lqh5WyfbNkI%2FRXxIpUScOU1R61TW2xoDncyfKZzxS%2BY%2BR9gIy%2FA2fS3Y%2FjeqWPTbJz3LKEDOc2HhRR0VS7L2PMtgPxdZGB%2F8ZpvQZnzfNiy%2FW03jchutsRcH67nJyO%2FwYO9CUBR%2FX%2F65v2JMMQQHs6gLQ7JkrKquWv%2FnYMq8QgWXwUjB%2FdRHbQIgJjEq%2B0B3kl9EK0pmxmLyZYWA%2BQGhZmwzttOVPDb73OCyqVo8LcaPRe5TkPGmNY4cGPiT4yYwHlsygiFb7mTkLmkitm90shfhBt7is%2Fd7Nj28oYMQvU1wNbLyjcdhRJ7gYNtfvjPzm%2FsxriN9PaYw9aeelQY6qQGYufa6n78YHRa9XE7kYNMOeVevSjnzrP02EBErVaNSZu3cHV8U2mIMRGo8rcTnP2%2BV1pocemy8dM5ZPgF7HAqfg9Lk9puQROwPF4yBSuLh4KhZ8V64gdPilnjS0TinFyH2PA%2B%2FKvjsXSeLrkDcKNm9mbt5cCtYKYzJf1%2B4A4NY8Wd3o9tZAtn%2FdDTodUc8hHBP%2BYkrIR6Bpd0PiXCp7bC1xzkJJGAAAGM%2F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220613T205058Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHPWL253%2F20220613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fc7fdee83d1b654805de8845b36a4bd34eb2030446c32e91c6a2c8ce643f4083";

  const obj = [
    {
      image: url,
      title: "Naomi Duguid's Fried Noodles",
      mealType: "LUNCH/DINNER",
      cuisineType: "ASIAN",
    },
  ];

  const mapRecipes = obj.map((recipe) => {
    return (
      <Recipe
        key={recipe.image}
        img={recipe.image}
        title={recipe.label}
        mealType={recipe.mealType}
        cuisineType={recipe.cuisineType}
      />
    );
  });

  return (
    <>
      <h1>
        Favorites
        <Link to="/">go home</Link>
      </h1>
      {mapRecipes}
    </>
  );
}

export default Favorites;
