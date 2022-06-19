import { React } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function SharedLayout() {
  console.log("i am SharedLayout");

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;