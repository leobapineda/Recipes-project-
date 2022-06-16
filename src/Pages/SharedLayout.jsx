import { React } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function SharedLayout() {
    console.log('i am haredlayout');
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;
