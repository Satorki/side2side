import Image from "next/image";
import React from "react";
import CrewImage from "../../public/images/about.jpg";

const AboutNewImage = () => {
  return (
    <div>
      <Image
        src={CrewImage}
        alt="side2side crew around the car"
        className="md:absolute md:top-0 md:right-0 w-full md:w-3/4 h-full object-cover md:object-[40%] 2xl:object-[-20%]"
      />
    </div>
  );
};

export default AboutNewImage;
