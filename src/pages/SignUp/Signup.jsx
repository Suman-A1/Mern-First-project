import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightColumn from "../../components/loginsignup/RightColumn";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    date: "",
    job: "",
    gender: "",
    message: "",
    errors: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      date: "",
      job: "",
      gender: "",
      message: "",
    },
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: " ",
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userData = {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
        date: formData.date,
        gender: formData.gender,
        message: formData.message,
      };
      localStorage.setItem("userDetails", JSON.stringify(userData));
      toast.success("Signup successfully");
      navigate("/");
    }
  };
  const validateForm = () => {
    const { fname, lname, email, password, message, date, job, gender } =
      formData;
    const wordCount = message.trim().split(/\s+/).length;

    const errors = {};

    if (!fname) {
      errors.fname = "Please enter your first name";
    }
    if (!lname) {
      errors.lname = "Please enter your last name";
    }
    if (!email) {
      errors.email = "Please enter your email address";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errors.email = "Please enter a valid email address";
      }
    }
    if (!password) {
      errors.password = "Please enter your password";
    } else {
      const passwordPattern = /^(?=.*[!@#$])[a-zA-Z0-9!@#$]{5,}$/;
      if (!passwordPattern.test(password)) {
        errors.password =
          "Password must have at least 5 characters including special characters like @, $, !, or #";
      }
    }
    if (!message) {
      errors.message = "Please enter your bio";
    } else {
      if (wordCount > 30) {
        errors.message = "Bio should be less than 30 words";
      }
    }
    if (!date) {
      errors.date = "Please enter your date of birth";
    }
    if (!job) {
      errors.job = "Please select your occupation";
    }
    if (!gender) {
      errors.gender = "Please select your gender";
    }

    if (wordCount > 30) {
      errors.message = "Bio should be less than 30 words";
    }

    setFormData({ ...formData, errors });

    if (Object.keys(errors).length > 0) {
      return false;
    }

    setFormData({ ...formData, errors: {} });
    return true;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center h-full bg-[#172228] py-24 ">
        <div className="flex  lg:flex-row flex-col min-h-screen lg:w-[85%] bg-white rounded-lg mx-auto">
          {/* first div  */}
          <div className="flex flex-col bg-white  gap-6 lg:w-[65%]  md:p-16  md:py-16 px-4 py-8 rounded-lg ">
            <div>
              <h1 className="font-bold text-[32px] leading-[38px]">Sign Up</h1>
              <p className="text-[16px] font-normal  mt-4">
                Please fill these information
              </p>
            </div>
            {/* form start  */}
            <form
              className="flex flex-col gap-6 mt-[40px]  "
              onSubmit={handleSubmit}
            >
              <div className="flex gap-4 w-full md:flex-row flex-col">
                <div className="w-full relative">
                  <div className="border-[1px] rounded-3xl  -top-[14px] left-3  absolute px-3 bg-white flex items-center justify-center ">
                    <label
                      htmlFor="fname"
                      className=" font-normal py-1 text-xs"
                    >
                      First Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Jhon"
                    className="border-2 py-3 px-4 w-full rounded-lg outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                  {formData.errors.fname && (
                    <p className="text-red-500">{formData.errors.fname}</p>
                  )}
                </div>
                <div className="w-full relative">
                  <div className="border-[1px] rounded-3xl  -top-[14px] left-3  absolute px-3 bg-white flex items-center justify-center ">
                    <label
                      htmlFor="lname"
                      className=" font-normal py-1 text-xs"
                    >
                      Last Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Doe"
                    className="border-2 py-3 px-4 w-full rounded-lg outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={formData.lname}
                    onChange={handleChange}
                  />
                  {formData.errors.lname && (
                    <p className="text-red-500"> {formData.errors.lname}</p>
                  )}
                </div>
              </div>
              <div className="relative mt-[30px]">
                <div className="border-[1px] rounded-3xl  -top-[14px] left-3  absolute px-3 bg-white flex items-center justify-center ">
                  <label htmlFor="email" className="font-normal py-1 text-xs">
                    Enter your Email
                  </label>
                </div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="jhondoe@gmail.com"
                  className="border-2 py-3 px-4 w-full rounded-lg outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formData.errors.email && (
                  <p className="text-red-500">{formData.errors.email}</p>
                )}
              </div>

              <div className="relative mt-[30px]">
                <div className="border-[1px] rounded-3xl  -top-[14px] left-3  absolute px-3 bg-white flex items-center justify-center ">
                  <label
                    htmlFor="password"
                    className="font-normal py-1 text-xs"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                  className="border-2 py-3 px-4 w-full rounded-lg outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={formData.password}
                  onChange={handleChange}
                />
                {formData.errors.password && (
                  <p className="text-red-500">{formData.errors.password}</p>
                )}
              </div>
              <div className="flex gap-4 w-full md:flex-row flex-col ">
                <div className="w-full relative mt-[30px]">
                  <div className="border-[1px] rounded-3xl  -top-[14px] left-3  absolute px-3 bg-white flex items-center justify-center ">
                    <label htmlFor="date" className="font-normal py-1 text-xs ">
                      DOB
                    </label>
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    max="2023-12-31"
                    className="border-2 py-3 px-4  w-full rounded-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none cursor-pointer"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {formData.errors.date && (
                    <p className="text-red-500">{formData.errors.date}</p>
                  )}
                </div>
                <div className="w-full relative mt-[30px] ">
                  <div className="border-[1px] rounded-3xl absolute -top-[14px] left-3 px-3 bg-white flex items-center justify-center">
                    <label
                      htmlFor="job"
                      className="font-normal py-1 text-xs bg-white"
                    >
                      Occupation
                    </label>
                  </div>
                  <div className="">
                    <div className="border-2 py-3 px-4 rounded-lg focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50">
                      <select
                        id="job"
                        name="job"
                        className="w-full outline-none bg-transparent cursor-pointer "
                        value={formData.job}
                        onChange={handleChange}
                        onFocus={(e) =>
                          e.target.parentNode.classList.add("focus")
                        }
                        onBlur={(e) =>
                          e.target.parentNode.classList.remove("focus")
                        }
                      >
                        <option value="default" selected hidden>
                          Job
                        </option>
                        <option value="developer">Developer</option>
                        <option value="engineer">Engineer</option>
                        <option value="uiux">UI/UX</option>
                        <option value="contentwriter">Content Writer</option>
                      </select>
                      {formData.errors.job && (
                        <p className="text-red-500">{formData.errors.job}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-[30px]">
                <div className="border-[1px] rounded-3xl absolute -top-[14px] left-3 px-3 bg-white flex items-center justify-center">
                  <label htmlFor="message" className="font-normal py-1 text-xs">
                    Bio
                  </label>
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write here"
                  rows="3"
                  className="border-2 py-3 px-4 w-full rounded-lg outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {formData.errors.message && (
                  <p className="text-red-500">{formData.errors.message}</p>
                )}
              </div>

              <div className=" mt-[30px]">
                <div className="flex  ">
                  <p>Gender:</p>

                  <div className="ml-8 flex space-x-4">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      className="appearance-none border mt-2 border-gray-300 rounded-full w-3 h-3 checked:bg-green-500 checked:border-transparent focus:outline-none outline-none"
                      onChange={handleChange}
                      value="male"
                      checked={formData.gender === "male"}
                    />

                    <label htmlFor="male">Male</label>
                    <div className="space-x-4 pl-8">
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        className="appearance-none border mt-2 border-gray-300 rounded-full w-3 h-3 checked:bg-green-500 checked:border-transparent focus:outline-none outline-none"
                        onChange={handleChange}
                        value="female"
                        checked={formData.gender === "female"}
                      />

                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {formData.errors.gender && (
                    <p className="text-red-500">{formData.errors.gender}</p>
                  )}
                </div>
              </div>

              <div className="mt-[30px]">
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-green-700"
                >
                  Sign Up
                </button>
              </div>
              <div className="mt-[30px]">
                <p className="text-sm font-light text-center">
                  Already have an account?
                  <Link
                    onClick={scrollToTop}
                    to="/login"
                    className="font-medium text-green-600 hover:underline dark:text-primary-500"
                  >
                    {" "}
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
          {/* second div */}
          <RightColumn />
        </div>
      </div>
    </>
  );
};
export default Signup;
