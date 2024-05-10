import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.jsx";
import Signup from "./pages/SignUp/Signup.jsx";
import Aboutus from "./pages/About/Aboutus.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Layout from "./pages/Layout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
