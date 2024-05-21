import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { FaCamera } from "react-icons/fa";

const UserProfile = () => {
  const imageRef = useRef(null);
  const [image, setImage] = useState("");
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    job: "",
    gender: "",
    bio: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modifiedFields, setModifiedFields] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({
      ...formData,
      [name]: value,
    });
    setModifiedFields({
      ...modifiedFields,
      [name]: true,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (
      modifiedFields.email &&
      formData.email &&
      !/\S+@\S+\.\S+/.test(formData.email)
    )
      tempErrors.email = "Email is invalid";

    return tempErrors;
  };

  const validatePassword = () => {
    let tempErrors = {};

    if (!formData.currentPassword) {
      tempErrors.currentPassword = "Current password is required";
    }

    if (!formData.newPassword) {
      tempErrors.newPassword = "New password is required";
    } else {
      const passwordPattern = /^(?=.*[!@#$])[a-zA-Z0-9!@#$]{5,}$/;
      if (!passwordPattern.test(formData.newPassword)) {
        tempErrors.newPassword =
          "Password must have at least 5 characters including special characters like @, $, !, or #";
      }
    }

    if (formData.newPassword !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    return tempErrors;
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    const isModified = Object.values(modifiedFields).some((field) => field);

    if (!isModified) {
      alert("Please update at least one field.");
      return;
    }

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        alert("Profile updated successfully!");
      }, 2000);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validatePassword();
    setPasswordErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        alert("Password updated successfully!");
        setShowModal(false);
      }, 2000);
    }
  };
  const handleClickImage = () => {
    imageRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
        localStorage.setItem("profileImage", base64String);
      };
      reader.readAsDataURL(file);
    }

    // console.log(file);
    // setImage(event.target.files[0]);
  };

  return (
    <>
      <div className="">
        <nav className="flex justify-between bg-white border-b-2 border-slate-300 px-20 py-3">
          <div className="flex">
            <h1 className="text-3xl font-bold text-green-500 mt-1">
              <span className="text-black">Lo</span>go
            </h1>
            <ul className="flex items-center mx-10">
              <Link to="/">
                <button className="bg-green-500 text-white text-lg hover:bg-green-600 px-5 p-2 rounded-lg mx-4">
                  Home
                </button>
              </Link>
              <li>Message</li>
            </ul>
          </div>
          <div>
            <img src="/images/profile.png" alt="" className="h-[50px] w-full" />
          </div>
        </nav>
        <div className="second-sec mt-16 flex justify-between px-20">
          <div className="relative">
            {/* <img src="/images/vector.png" alt="profile-img" /> */}
            <div className="absolute top-14 left-16 bg-white p-2 rounded-[100%]">
              <FaCamera size={25} onClick={handleClickImage} />
            </div>
            {image ? (
              <img
                src={image}
                alt="profile-image"
                className="h-[102px] w-[102px] rounded-[100%]"
              />
            ) : (
              <img src="/images/profile-set.png" alt="profile-image" />
            )}
            <input
              type="file"
              accept="image/*"
              capture="camera"
              ref={imageRef}
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <div className="flex items-center gap-8">
            <button
              className="border broder-2 border-gray-400 p-3 rounded-lg hover:bg-green-500 text-gray-500 font-bold hover:text-white"
              onClick={() => setShowModal(true)}
            >
              Change Password
            </button>
            <button
              className="bg-green-500 text-white p-3 px-5 rounded-lg"
              onClick={handleProfileSubmit}
            >
              {loading ? "Updating..." : "Edit"}
            </button>
          </div>
        </div>
        <div className="form-sec mt-12 px-20">
          <form onSubmit={handleProfileSubmit}>
            <div className="flex gap-8 w-full md:flex-row flex-col">
              <div className="w-full relative">
                <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                  <label htmlFor="fname" className="font-normal py-1 text-xs">
                    First Name
                  </label>
                </div>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder="Enter your First name"
                  className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
                />
              </div>
              <div className="w-full relative">
                <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                  <label htmlFor="lname" className="font-normal py-1 text-xs">
                    Last Name
                  </label>
                </div>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  placeholder="Enter your Last name"
                  className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
                />
              </div>
            </div>
            <div className="email-sec flex mt-[30px]">
              <div className="flex gap-8 w-full md:flex-row flex-col">
                <div className="w-full relative">
                  <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                    <label htmlFor="email" className="font-normal py-1 text-xs">
                      Enter your Email
                    </label>
                  </div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
                <div className="w-full relative">
                  <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                    <label htmlFor="dob" className="font-normal py-1 text-xs">
                      DOB
                    </label>
                  </div>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    max="2023-12-31"
                    placeholder="Enter your DOB"
                    className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-8 w-full md:flex-row flex-col mt-[30px]">
              <div className="w-full relative">
                <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                  <label htmlFor="job" className="font-normal py-1 text-xs">
                    Job
                  </label>
                </div>
                <div>
                  <div className="border-2 py-3 px-4 rounded-xl focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50">
                    <select
                      id="job"
                      name="job"
                      value={formData.job}
                      onChange={handleChange}
                      className="w-full outline-none bg-transparent"
                    >
                      <option value="default" disabled hidden>
                        Job
                      </option>
                      <option value="developer">Developer</option>
                      <option value="engineer">Engineer</option>
                      <option value="uiux">UI/UX</option>
                      <option value="contentwriter">Content Writer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-center mt-3">
                <div className="flex">
                  <p>Gender:</p>
                  <div className="ml-8 flex space-x-4">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      className="appearance-none border mt-2 border-gray-300 rounded-full w-3 h-3 checked:bg-green-500 checked:border-transparent focus:outline-none"
                    />
                    <label htmlFor="male">Male</label>
                    <div className="space-x-4 pl-8">
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                        className="appearance-none border mt-2 border-gray-300 rounded-full w-3 h-3 checked:bg-green-500 checked:border-transparent focus:outline-none"
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[30px]">
              <div className="border-[1px] rounded-3xl absolute -top-[14px] left-3 px-3 bg-white flex items-center justify-center">
                <label htmlFor="bio" className="font-normal py-1 text-xs">
                  Bio
                </label>
              </div>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Write here"
                rows="4"
                className="border-2 py-3 px-4 w-full rounded-lg outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="mt-8 px-8">
          <h1 className="font-bold text-2xl leading-10">Change Password</h1>
          <p className="font-normal text-sm mt-4">Enter Your Password</p>
        </div>
        <div className="px-8">
          <form onSubmit={handlePasswordSubmit}>
            <div className="relative mt-10">
              <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                <label
                  htmlFor="currentPassword"
                  className="font-normal py-1 text-xs"
                >
                  Current Password
                </label>
              </div>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Password"
                className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
              />
              {passwordErrors.currentPassword && (
                <p className="text-red-500 text-xs">
                  {passwordErrors.currentPassword}
                </p>
              )}
            </div>
            <div className="relative mt-[30px]">
              <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                <label
                  htmlFor="newPassword"
                  className="font-normal py-1 text-xs"
                >
                  New Password
                </label>
              </div>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Password"
                className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
              />
              {passwordErrors.newPassword && (
                <p className="text-red-500 text-xs">
                  {passwordErrors.newPassword}
                </p>
              )}
            </div>
            <div className="relative mt-[30px]">
              <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                <label
                  htmlFor="confirmPassword"
                  className="font-normal py-1 text-xs"
                >
                  Confirm New Password
                </label>
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Password"
                className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
              />
              {passwordErrors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {passwordErrors.confirmPassword}
                </p>
              )}
            </div>
            <div className="grid mt-8 mb-10">
              <button
                type="submit"
                className="bg-green-500 text-white text-lg font-normal rounded-xl py-2 hover:bg-green-700"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default UserProfile;