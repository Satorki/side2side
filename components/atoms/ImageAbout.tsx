import Image from "next/image";
import React from "react";
import CrewImage from "../../public/images/about.jpg";

const ImageAbout = () => {
  return (
    <div>
      <Image
        src={CrewImage}
        alt="side2side crew around the car"
        className="rounded-2xl md:rounded-none md:absolute md:top-0 md:right-0 w-full md:w-3/4 md:h-screen object-cover h-[50vh] md:object-[20%] 2xl:w-3/5 2xl:object-[20%] py-5 scale-125 md:scale-100"
      />
    </div>
  );
};

export default ImageAbout;
