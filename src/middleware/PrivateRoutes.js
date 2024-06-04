// PrivateRoutes.jsx

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function PrivateRoute() {
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    navigate("/");
    return null;
  }

  return <Outlet />;
}

export default PrivateRoute;
