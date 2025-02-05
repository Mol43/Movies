import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#000000D6] text-white">
      <h1 className="text-[72px] font-bold">404</h1>
      <p className="text-[24px]">Page Not Found</p>
      <Link to="/" className="mt-4 px-6 py-3 bg-[#B11226] rounded text-white text-[24px]">
        Go to Home
      </Link>
    </div>
  );
};
