import Image from "next/image";
import React from "react";
import HeroImagePicture from "../../public/images/hero-2-hq.jpg";

const HeroImage = () => {
  return (
    <Image
      src={HeroImagePicture}
      alt="hero image a car during ride on a curcuit"
      className="-z-10 absolute right-0 bottom-0 w-full h-[50%] md:h-full object-cover object-right-bottom"
    />
  );
};

export default HeroImage;
