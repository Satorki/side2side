import Image from "next/image";
import React from "react";
import CrewImage from "@/public/images/About/about.jpg";

const ImageAbout = () => {
  return (
    <div className="relative z-0 flex-1">
      <div className="absolute w-[90%] h-[90%] bg-black opacity-40 -top-5 -right-5 rounded-2xl z-0 motion-scale-in-[0.5] motion-translate-x-in-[59%] motion-translate-y-in-[-56%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"></div>
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
