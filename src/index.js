import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.jsx";
import Signup from "./pages/SignUp/Signup.jsx";
import Aboutus from "./pages/About/Aboutus.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Layout from "./pages/Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Home" element={<HomePage />}></Route>
      <Route path="About" element={<Aboutus />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="signUp" element={<Signup />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
