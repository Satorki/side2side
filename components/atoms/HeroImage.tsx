import Image from "next/image";
import React from "react";
import HeroImagePicture from "../../public/images/Hero-High.jpg";

const HeroImage = () => {
  // object-[80%]
  return (
    <Image
      src={HeroImagePicture}
      alt="hero image a car during ride on a curcuit"
      className="z-10 absolute right-0  bottom-0 w-full h-full object-cover
      object-[86%]  md:object-right-bottom 2xl:object-center"
    />
  );
};

export default HeroImage;
