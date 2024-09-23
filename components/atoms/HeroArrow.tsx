import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroArrow = () => {
  return (
    <div className="absolute bottom-0 text-white w-full flex justify-center gap-10 z-20">
      <div className="rounded-full bg-slate-300 bg-opacity-40 flex justify-center items-center w-10 h-10 text-black mb-4 pt-1 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4">
        <FaArrowDown className="text-2xl" />
      </div>
    </div>
  );
};

export default HeroArrow;
