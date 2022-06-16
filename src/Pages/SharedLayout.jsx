import { React } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function SharedLayout() {
    console.log('i am haredlayout');
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default SharedLayout;
