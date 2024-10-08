import React from "react";
import { FaGoogle } from "react-icons/fa";

const ReviewQuote = () => {
  return (
    <div className="flex items-center my-5 p-5 bg-white rounded-xl text-black">
      Mamy 19, 5 gwiazdkowych opini na{" "}
      <span className="pl-1">
        <FaGoogle />
      </span>
      oogle
    </div>
  );
};

export default ReviewQuote;
