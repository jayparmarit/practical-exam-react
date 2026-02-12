import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Ui/Navbar";

const Layout = () => {
  return (
    <>
      <Navigation/>
      <Outlet />
    </>
  );
};

export default Layout;
