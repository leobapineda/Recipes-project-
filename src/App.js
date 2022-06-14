// rafce

import { React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./Pages/Home";
import Favorites from './Pages/Favorites'
export default function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="favorites" element={<Favorites />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
