import Image from "next/image";
import React from "react";
import CrewImage from "@/public/images/About/about-side2side.jpg";

const ImageAbout = () => {
  return (
    <div className="relative z-0 flex-1 my-4">
      <div className="absolute  w-full h-full bg-black opacity-40 -top-5 -right-5 rounded-2xl z-0"></div>
      <div className="relative mr-2 mt-2 z-10">
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
