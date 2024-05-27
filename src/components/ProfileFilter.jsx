import React from "react";

const GlobalFilter = ({ filter, setFilter, setDeleteRow }) => {
  return (
    <div className="px-8 flex mt-14 ">
      <div className="relative w-[73%] ml-[120px] -z-0 ">
        <input
          type="text"
          className="w-full px-4 py-2 border-[1px] bg-[#F6F6F6] rounded-[5px] h-[50px] text-sm font-medium text-[#343434] pr-10 outline-none focus:border-indigo-400 "
          placeholder="Search by user name, occupation..."
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
        <img
          src="/images/search-icon.png"
          alt="search"
          className="absolute right-1 p- top-1/2 transform -translate-y-1/2 h-10 cursor-pointer"
        />
      </div>
      <div className="">
        <img
          src="/images/delete-icon.png"
          alt="delete"
          className="bg-green-600 p-3 cursor-pointer h-12 rounded-[5px] ml-[20px]"
          onClick={() => {
            setFilter("");
            setDeleteRow();
          }}
        ></img>
      </div>
    </div>
  );
};

export default GlobalFilter;
