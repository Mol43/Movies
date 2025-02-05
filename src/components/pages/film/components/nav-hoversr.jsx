import React, { useState } from 'react';

export const NavHover = () => {
  const [isGenreModalOpen, setIsGenreModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsGenreModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsGenreModalOpen(false);
  };

  return (
    <div className="w-full relative px-[230px] h-[50px] flex items-center justify-between">
      <a href="#">Home</a>
      <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Genre
      </a>
      <a href="#">Country</a>
      <a href="#">Movies</a>
      <a href="#">TV Series</a>
      <a href="#">Top ImDb</a>
      <div
        className={`absolute top-[38px] text-[#707070] left-[350px] flex gap-[47px] bg-white px-[34px] py-[28px] shadow-lg rounded-[20px] border-2 border-[#B11226] transition-opacity duration-300 ${isGenreModalOpen ? 'opacity-100' : 'opacity-0'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ pointerEvents: isGenreModalOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col gap-2">
          <a href="#">Crime</a>
          <a href="#">Biography</a>
          <a href="#">Action</a>
          <a href="#">Adventure</a>
          <a href="#">Romance</a>
          <a href="#">History</a>
          <a href="#">Thriller</a>
          <a href="#">Horror</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#">Rom Com</a>
          <a href="#">Comedy</a>
          <a href="#">Bollywood</a>
          <a href="#">Korean</a>
          <a href="#">Sci-Fi</a>
          <a href="#">Western</a>
          <a href="#">War</a>
          <a href="#">Mystery</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#">Musical</a>
          <a href="#">Document</a>
          <a href="#">Fantasy</a>
          <a href="#">Family</a>
          <a href="#">Animation</a>
        </div>
      </div>
    </div>
  );
};
