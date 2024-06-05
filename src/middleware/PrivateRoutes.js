import { React, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function PrivateRoutes() {
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  if (!isLoggedIn) {
    return null;
  }

  return <Outlet />;
}

export default PrivateRoutes;
