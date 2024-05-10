import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [selectValue, setSelectValue] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setSelectData(data))
      .catch((err) => console.log(err));
  };
  const SeletDropdown = () => {
    return (
      <div
        style={{
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="selectDropdown">Select City:</label>
        <select
          id="selectDropdown"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          style={{
            width: "100%",
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid #ccc",
          }}
        >
          {selectData?.map((item) => (
            <option value={item.name} key={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(
        fname,
        "|",
        lname,
        "|",
        email,
        "|",
        password,
        "|",
        message,
        "|"
      );
    }
  };

  const validateForm = () => {
    if (!fname || !lname || !email || !password || !message) {
      setError("Please fill all the required fields");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address must include @");
      return false;
    }

    const passwordPattern = /^(?=.*[!@#$])[a-zA-Z0-9!@#$]{5,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must have at least 5 characters including special characters like @, $, !, or #"
      );
      return false;
    }
    if (!selectValue) {
      setError("Please select an option");
      return false;
    }

    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 30) {
      setError("Bio should be less than 30 words");
      return false;
    }

    setError("");
    return true;
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-full bg-[#172228] py-24"
        style={{ backgroundImage: "url('/images/layer.png')" }}
      >
        <div className=" mx-auto   ">
          <div className="  flex flex-col lg:flex-row w-10/12 rounded-xl bg-white mx-auto ">
            <div className=" lg:w-3/5 py-12 px-20">
              <h1 className="text-3xl font-bold mb-4 ">Sign Up</h1>
              <p className="mb-4">Please fill these details</p>
              <form action="#">
                <div className="flex gap-4 mt-8">
                  <label className="block">
                    <span className="text-gray-700">First Name</span>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className="border mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">First Name</span>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className="border mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                    />
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="border w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 "
                    />
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    <span className="text-gray-700">Password</span>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="border w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 "
                    />
                  </label>
                </div>
                <div className="flex gap-4 mt-4">
                  <label className="block">
                    <span className="text-gray-700">DOB</span>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="border mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-9"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Occupation</span>
                    <select
                      name="occupation"
                      id="occupation"
                      className="border mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-16"
                    >
                      <option value="engineer">Engineer</option>
                      <option value="doctor">Doctor</option>
                      <option value="teacher">Teacher</option>
                      <option value="artist">Artist</option>
                    </select>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block">
                    <span className="text-gray-700">Bio</span>
                    <textarea
                      placeholder="Write here..."
                      name="message"
                      id="message"
                      rows="3"
                      className="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 text-gray-500"
                    ></textarea>
                  </label>
                </div>
                <div className=" mt-4 ">
                  <div className="flex  ">
                    <p>Gender:</p>
                    <div className="ml-8 flex space-x-4">
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        className="appearance-none border mt-2 border-gray-300 rounded-full w-3 h-3 checked:bg-green-500 checked:border-transparent focus:outline-none"
                      />
                      <label htmlFor="male">Male</label>
                      <div className="space-x-4 pl-8">
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          className="appearance-none border mt-2 border-gray-300 rounded-full w-3 h-3 checked:bg-green-500 checked:border-transparent focus:outline-none"
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded focus:outline-none"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-light text-center">
                    Already have an account?
                    <Link
                      to="#"
                      className="font-medium text-green-600 hover:underline dark:text-primary-500"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="  bg-[#F9F5F2] w-full  py-72 ">
              <div className="flex flex-col  items-center justify-center ">
                <p className=" mr-52 mt-6">Continue with:</p>
                <div className="flex flex-col items-center  ">
                  <div className="flex items-center  mr-52 mt-6  ">
                    <Link className="  ml-16  rounded-full border border-white bg-[#fffDFD] py-2 px-2 relative left-2  ">
                      <img
                        src="/images/OBJECTS.png"
                        alt="google-iconss"
                        height="33"
                        width="33"
                        className=""
                      />
                    </Link>
                    <span className="bg-white px-10 p-1 ">Google</span>
                    <div className="bg-[#0000001A] w-2 h-8 "></div>
                  </div>
                  <div className="flex items-center  mr-40 mt-6 ">
                    <Link className="rounded-full border border-black mr-2 bg-white p-2 px-3 relative left-6 ">
                      <img
                        src="/images/object1.png"
                        alt="apple-icon"
                        height="34"
                        width="27"
                        className=" "
                      />
                    </Link>
                    <span className=" bg-white px-10 p-1 ">Apple ID</span>
                    <div className="bg-[#00000033] w-2 h-8 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mx-auto mt-8 px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
        <label className="block mb-4 text-center">
          Please fill these details
        </label>

        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 ">
            <div className="">
              <label className="block">
                <span className="text-gray-700">First Name</span>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Last Name</span>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </label>
            </div>
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                placeholder="harrywins3@gmail.com"
                type="text"
                name="email"
                id="email"
                className="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <SeletDropdown />
            <label className="block">
              <span className="text-gray-700">Bio</span>
              <textarea
                placeholder="Write here..."
                name="message"
                id="message"
                rows="3"
                className="border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 text-gray-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
};
export default Signup;
