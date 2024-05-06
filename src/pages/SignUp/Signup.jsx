import React, { useState, useEffect } from "react";

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
      <div className="mx-auto mt-8 px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
        <label className="block mb-4 text-center">
          Please fill these details
        </label>

        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
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
      </div>
    </>
  );
};

export default Signup;
