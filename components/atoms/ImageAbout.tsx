import Image from "next/image";
import React from "react";
import CrewImage from "@/public/images/About/about.jpg";

const ImageAbout = () => {
  return (
    <div className="relative z-0">
      <div className="absolute w-[93%] h-[93%] bg-white opacity-20 top-0 left-0 rounded-2xl z-0"></div>
      <div className="relative ml-5 mt-5 z-10">
        <Image
          src={CrewImage}
          alt="side2side crew around the car"
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default ImageAbout;
