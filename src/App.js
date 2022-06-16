// rafce

import { React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./Pages/Home";
import Favorites from './Pages/Favorites'
import SharedLayout from "./Pages/SharedLayout";
export default function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/favorites" element={<Favorites />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
