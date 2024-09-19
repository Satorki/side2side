import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroArrow = () => {
  return (
    <div className="rounded-full bg-slate-300 bg-opacity-40 flex justify-center items-center w-10 h-10 text-black mb-4 pt-1">
      <FaArrowDown className="text-2xl"/>
    </div>
  );
};

export default HeroArrow;
