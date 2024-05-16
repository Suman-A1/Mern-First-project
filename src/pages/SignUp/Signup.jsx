import React, { useState } from "react";
import { Link } from "react-router-dom";

import RightColumn from "../../components/loginSignup/RightColumn";

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
      console.log(
        formData.fname,
        "|",
        formData.lname,
        "|",
        formData.email,
        "|",
        formData.password,
        "|",
        formData.message,
        "|",
        formData.date,
        "|",
        formData.job,
        "|",
        formData.gender
      );
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
      const emailPattern = /@/;
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
      <div className="bg-hero-pattern bg-cover bg-center h-full bg-[#172228] py-24">
        <div className="flex  lg:flex-row flex-col min-h-screen lg:w-[85%] bg-white rounded-lg mx-auto">
          {/* first div  */}
          <div className="flex flex-col  gap-6 lg:w-[65%]  md:p-16  md:py-16 px-4 py-8 bg-white">
            <div>
              <h1 className="font-bold text-4xl">Sign Up</h1>
              <p className="text-lg  pt-4">Please fill these information</p>
            </div>
            {/* form start  */}
            <form className="flex flex-col gap-6 mt-4" onSubmit={handleSubmit}>
              <div className="flex gap-4 w-full md:flex-row flex-col">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="text-lg font-semibold pb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter your First name"
                    className="border-2 py-3 px-4 w-full rounded-lg"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                  {formData.errors.fname && (
                    <p className="text-red-500">{formData.errors.fname}</p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="text-lg font-semibold pb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your Last name"
                    className="border-2 py-3 px-4 w-full rounded-lg"
                    value={formData.lname}
                    onChange={handleChange}
                  />
                  {formData.errors.lname && (
                    <p className="text-red-500"> {formData.errors.lname}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-lg font-semibold pb-2">
                  Enter your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="border-2 py-3 px-4 w-full rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formData.errors.email && (
                  <p className="text-red-500">{formData.errors.email}</p>
                )}
              </div>

              <div>
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
                  value={formData.password}
                  onChange={handleChange}
                />
                {formData.errors.password && (
                  <p className="text-red-500">{formData.errors.password}</p>
                )}
              </div>
              <div className="flex gap-4 w-full md:flex-row flex-col">
                <div className="w-full">
                  <label htmlFor="dob" className="text-lg font-semibold pb-2">
                    DOB
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="Enter your DOB"
                    className="border-2 py-3 px-4 w-full rounded-lg"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {formData.errors.date && (
                    <p className="text-red-500">{formData.errors.date}</p>
                  )}
                </div>
                <div className="w-full">
                  <label for="job" className="text-lg font-semibold pb-2">
                    Occupation
                  </label>
                  <select
                    id="job"
                    name="job"
                    className="border-2 py-3 px-4 w-full rounded-lg"
                    value={formData.job}
                    onChange={handleChange}
                  >
                    {formData.errors.job && (
                      <p className="text-red-500">{formData.errors.job}</p>
                    )}
                    <option value="default" selected hidden>
                      Job
                    </option>
                    <option value="developer">Developer</option>
                    <option value="engineer">Engineer</option>
                    <option value="uiux">UI/UX</option>
                    <option value="contentwriter">Content Writer</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block">
                  <span className="text-lg font-semibold pb-2">Bio</span>
                  <textarea
                    placeholder="Write here..."
                    name="message"
                    id="message"
                    rows="3"
                    className="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 "
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {formData.errors.message && (
                    <p className="text-red-500">{formData.errors.message}</p>
                  )}
                </label>
              </div>
              <div className=" mt-3">
                <div className="flex  ">
                  <p>Gender:</p>

                  <div className="ml-8 flex space-x-4">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      className="appearance-none border mt-2 border-gray-300 rounded-full w-3 h-3 checked:bg-green-500 checked:border-transparent focus:outline-none"
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
                        className="appearance-none border mt-2 border-gray-300 rounded-full w-3 h-3 checked:bg-green-500 checked:border-transparent focus:outline-none"
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

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-green-700"
                >
                  Sign Up
                </button>
              </div>
              <div className="mt-4">
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
