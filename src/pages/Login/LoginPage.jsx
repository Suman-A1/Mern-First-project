import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightColumn from "../../components/loginsignup/RightColumn";
import { toast } from "react-toastify";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userDetails"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("loggedIn", true);
      toast.success("Login Successfully!");
      navigate("profiletable");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-hero-pattern bg-cover bg-center h-full bg-[#172228] py-24">
      <div className="flex bg-white flex-col md:flex-col lg:flex-row md:w-[85%]  rounded-lg mx-auto  ">
        <div className="flex flex-col  gap-6 md:w-full md:p-16 md:py-16   rounded-lg  lg:w-3/5  ">
          <div className="">
            <h1 className="font-bold text-2xl px-4">Login</h1>
            <p className="text-lg  px-4 pt-2">Please fill your information</p>
          </div>
          <form className="flex flex-col  gap-6 mt-4" onSubmit={handleLogin}>
            <div className="relative">
              <div className="border-[1px] rounded-3xl  -top-[14px] left-3  absolute px-3 bg-white flex items-center justify-center ">
                <label htmlFor="email" className=" font-normal py-1 text-xs  ">
                  Enter your Email
                </label>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="jhondoe@gmail.com"
                className="border-2 py-3 px-4 w-full rounded-lg focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative mt-[30px]">
              <div className="border-[1px] rounded-3xl  -top-[14px] left-3  absolute px-3 bg-white flex items-center justify-center ">
                <label
                  htmlFor="password"
                  className=" font-normal py-1 text-xs "
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="******"
                className="border-2 py-3 px-4 w-full rounded-lg focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
                value={formData.password}
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
        <RightColumn />
      </div>
    </div>
  );
}

export default LoginPage;
