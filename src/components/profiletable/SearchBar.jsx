import React from "react";

const SearchBar = ({ filter, setFilter, setDeleteRow }) => {
  return (
    <div className=" flex mt-14 w-[73%] mx-auto">
      <div className="relative w-full  ">
        <input
          type="text"
          className="w-full px-4 py-2 border-[1px] bg-[#F6F6F6] rounded-[5px] h-[50px] text-sm font-medium text-[#343434] pr-10 outline-none focus:border-indigo-400 "
          placeholder="Search by user name, occupation..."
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass absolute right-1 p- top-1/2 transform -translate-y-1/2 h-10 cursor-pointer bg-green-600 p-3 rounded-lg text-white text-xl flex items-center"></i>
      </div>
      <div>
        <i
          className="fa-solid fa-trash-can bg-green-600 p-3.5 text-2xl  flex items-center cursor-pointer h-[50px] rounded-[5px] ml-[16px] text-white"
          onClick={() => {
            setFilter("");
            setDeleteRow();
          }}
        ></i>
      </div>
    </div>
  );
};

export default SearchBar;
