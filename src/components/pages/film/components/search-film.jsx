import React from "react";

export const SearchFilm = () => {
  return (
    <div className="flex items-center h-[500px]">
      <div className="flex mx-auto text-center flex-col gap-[20px]">
        <h1 className="text-2xl font-bold">
          Find Movies, TV Series and much more
        </h1>
        <div className="flex items-center gap-[20px] mt-[20px]">
          <div className="relative flex items-center ">
            <img
              src="/assets/svgicons/search.svg"
              className="absolute left-[17px]"
              alt=""
            />
            <input
              type="text"
              className="px-[80px] w-[859px] py-[13px] bg-white text-[#707070] text-[30px] font-bold outline-none"
              placeholder="Enter the Name......"
            />
          </div>
          <button className="cursor-pointer bg-white text-black px-[25px] py-[9px]">
            <img src="/assets/svgicons/left.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
