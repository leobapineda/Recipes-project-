import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import SharedLayout from "./Pages/SharedLayout";
import SingleRecipe from "./Pages/SingleRecipe";
import "./App.css";

export default function App() {
  console.log("i am App 23");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/linguini-recipes" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/linguini-recipes/:recipeName" element={<SingleRecipe />} />
          <Route path="/linguini-recipes/favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
