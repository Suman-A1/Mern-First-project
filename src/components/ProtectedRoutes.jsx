import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoute() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (!isLoggedIn) {
    navigate("/");
    return null;
  }

  return <Outlet />;
}

export default PrivateRoute;
