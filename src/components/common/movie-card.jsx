import React from "react";
import { Link } from "react-router-dom";


export const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="hover:opacity-70 hover:scale-105 transition-all duration-300">
      <img src={movie.imgUrl} alt=""  className='w-[177px] h-[250px] object-cover'/>
    </Link>
  );
};
