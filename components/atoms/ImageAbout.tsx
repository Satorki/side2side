import Image from "next/image";
import React from "react";
import CrewImage from "@/public/images/About/about.jpg";

const ImageAbout = () => {
  return (
    <div>
      <Image
        src={CrewImage}
        alt="side2side crew around the car"
        className="md:absolute md:top-0 md:right-0 w-full md:w-3/4 md:h-screen object-cover h-[40vh] md:object-[20%] 2xl:w-3/5 2xl:object-[20%]"
      />
    </div>
  );
};

export default ImageAbout;
