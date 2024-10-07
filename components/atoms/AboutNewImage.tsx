import Image from "next/image";
import React from "react";
import CrewImage from "../../public/images/about.jpg";

const AboutNewImage = () => {
  return (
    <div>
      <Image src={CrewImage} alt="side2side crew around the car" className="absolute top-0 right-0 w-3/4 h-full object-cover object-[40%] 2xl:object-[0%]" />
    </div>
  );
};

export default AboutNewImage;
