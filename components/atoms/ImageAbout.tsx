import Image from "next/image";
import React from "react";
import CrewImage from "@/public/images/About/about.jpg";

const ImageAbout = () => {
  return (
    <div>
      <Image
        src={CrewImage}
        alt="side2side crew around the car"
        className="object-cover rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default ImageAbout;
