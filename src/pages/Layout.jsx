import React from "react";
import Header from "../components/navbar/Header";

import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
};
