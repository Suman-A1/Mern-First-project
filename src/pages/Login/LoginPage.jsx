import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import RightColumn from "../../components/loginSignup/RightColumn";

function LoginPage() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLogin); // Log userLogin object to console
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center h-full bg-[#172228] py-24">
        <div className="flex bg-white flex-col md:flex-col lg:flex-row md:w-[85%]  rounded-lg mx-auto  ">
          {/* first div  */}
          <div className="flex flex-col  gap-6 md:w-full md:p-16 md:py-16   rounded-lg  lg:w-3/5  ">
            <div className="">
              <h1 className="font-bold text-2xl px-4">Login</h1>
              <p className="text-lg  px-4 pt-2">Please fill your information</p>
            </div>
            {/* form start  */}
            <form
              className="flex flex-col  gap-6 mt-4 "
              onSubmit={handleSubmit}
            >
              <div className="">
                <label htmlFor="email" className="text-lg font-semibold pb-2 ">
                  Enter your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border-2 py-3 px-4 w-full rounded-lg  "
                  value={userLogin.email}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="text-lg font-semibold pb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="border-2 py-3 px-4 w-full rounded-lg"
                  value={userLogin.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5"></div>
                </div>
                <Link
                  to="#"
                  className="text-sm font-light hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <div className=" grid">
                <button
                  type="submit"
                  className="bg-green-500 font-semibold text-white text-2xl rounded-lg py-2 hover:bg-green-700"
                >
                  Login
                </button>
              </div>
              <p className="text-sm font-light text-center">
                Have not any account?
                <Link
                  onClick={scrollToTop}
                  to="/signup"
                  className="font-medium text-green-600 hover:underline dark:text-primary-500"
                >
                  {" "}
                  Create Now
                </Link>
              </p>
            </form>
          </div>

          {/* second div */}
          <RightColumn />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
