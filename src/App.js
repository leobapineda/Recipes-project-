// rafce

import { React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./Pages/Home";
import Favorites from './Pages/Favorites'
import Header from "./components/Header";
export default function App() {

  return (
    <>
   <BrowserRouter>
   <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="favorites" element={<Favorites />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
