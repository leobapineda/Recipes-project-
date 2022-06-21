import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error"
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import SharedLayout from "./Pages/SharedLayout";
import SingleRecipe from "./Pages/SingleRecipe";
import "./App.css";

export default function App() {
  console.log("i am App 17");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home  />} />
          <Route path="/:recipeName" element={<SingleRecipe />}  />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
