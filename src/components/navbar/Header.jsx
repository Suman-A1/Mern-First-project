import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { isAuthenticated, getUserDetails } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const Header = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = getUserDetails();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="flex justify-around  items-center bg-white border-[1px] border-slate-300 h-[80px] py-[26px]  ">
        <div className="flex   ">
          <div className=" ml-2 ">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>
          {/* <div>
            <ul className="flex items-center ml-[72px]">
              <Link to="/">
                <button className="bg-green-500 text-white text-[16px] leading-[19.36px] font-normal hover:bg-green-600 py-[6px] px-[12px] rounded-[6px] mx-4">
                  Home
                </button>
              </Link>
              <Link to="/">
                <button className="text-[16px] leading-[19.36px] font-normal hover:bg-green-600 py-[6px] px-[12px] rounded-[6px] ml-5">
                  Message
                </button>
              </Link>
            </ul>
          </div> */}
        </div>
        <div className="flex items-center h-[50px]  relative">
          <div
            className="main-div bg-white border-[1px] shadow-sm border-gray-100 flex items-center rounded-xl p-3 ml-[260px]
           "
          >
            <div className="flex items-center relative ">
              <img
                src="/images/profile-set.png"
                alt="user profile"
                className="h-[36px] w-[36px] "
              />
              <div className="text-[15px] font-medium leading-[18.15px] ml-3">
                {isAuthenticated && <span>{user.fname}</span>}

                <h3 className="font-normal text-[13px] leading-4 text-[#959EAD]">
                  {isAuthenticated && <span>{user.email}</span>}
                </h3>
              </div>
              <AiOutlineDown
                className="ml-[38px] cursor-pointer"
                onClick={toggleDropdown}
              />
            </div>
            {isOpen && (
              <div className="absolute top-[56px] right-0 mt-2 w-[270px] bg-white  rounded-lg border-[1px] shadow-md pb-3 border-gray-100 z-10">
                <ul className="h-[80px]">
                  <div className="flex mt-[12px] hover:bg-gray-300 py-1 ">
                    <div className="ml-[14px] mt-1">
                      <img
                        src="/images/user-icon.png"
                        alt="user"
                        className="h-4 w-4"
                      />
                    </div>
                    <Link to="/editprofile">
                      <li className="px-4">Edit Profile</li>
                    </Link>
                  </div>
                  <div className="border-b-[2px] border-gray-100 mt-2 "></div>
                  <div className="flex mt-2 py-1   hover:bg-gray-300 items-center justify-start">
                    <div className="ml-[16px] ">
                      <img
                        src="/images/logout-icon.png"
                        alt="logout"
                        className=""
                      />
                    </div>
                    <li
                      className="ml-[14px] cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
