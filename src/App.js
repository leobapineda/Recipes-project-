import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import SharedLayout from "./Pages/SharedLayout";
import SingleRecipe from "./Pages/SingleRecipe";
import "./App.css";

export default function App() {
  console.log("i am App");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="https://leobapineda.github.io/linguini-recipes/" element={<SharedLayout />}>
          <Route index element={<Home  />} />
          <Route path="https://leobapineda.github.io/linguini-recipes/:recipeName" element={<SingleRecipe />}  />
          <Route path="https://leobapineda.github.io/linguini-recipes/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
