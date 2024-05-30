import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-around  items-center bg-white border-[1px] border-slate-300 h-[80px] py-[26px]  ">
        <div className="flex   ">
          <div className=" ml-2 ">
            <img src="/images/Logo.png" alt="Logo" />
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
        <div className="flex items-center h-[50px] cursor-pointer relative">
          <div
            className="main-div bg-white border-[1px] shadow-sm border-gray-100 flex items-center rounded-xl p-3 ml-[280px]
           "
          >
            <div className="flex items-center relative ">
              <img
                src="/images/profile-set.png"
                alt="user profile"
                className="h-[36px] w-[36px] "
              />
              <div className="text-[15px] font-medium leading-[18.15px] ml-3">
                <h3>Joseph</h3>
                <p className="font-normal text-[13px] leading-4 text-[#959EAD]">
                  joseph@gmail.com
                </p>
              </div>
              <AiOutlineDown className="ml-[45px]" onClick={toggleDropdown} />
            </div>
            {isOpen && (
              <div className="absolute top-[55px] right-0 mt-2 w-60 bg-white rounded-lg border-[1px] shadow-md pb-3 border-gray-100 z-10">
                <ul className="h-[80px]">
                  <div className="flex mt-[12px] hover:bg-gray-300 py-1 ">
                    <div className="ml-[16px] mt-1">
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
                  <div className="border-b-[2px] border-gray-100 mt-3"></div>
                  <div className="flex mt-1 py-1 hover:bg-gray-300 items-center justify-start">
                    <div className="ml-[16px]">
                      <img
                        src="/images/logout-icon.png"
                        alt="logout"
                        className=""
                      />
                    </div>
                    <li className="ml-[17px]">Logout</li>
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