import HeroArrow from "@/components/atoms/HeroArrow";
import HeroImage from "@/components/atoms/HeroImage";
import HeroTitle from "@/components/atoms/HeroTitle";
import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <HeroTitle />
      <HeroImage />
      <div className="absolute bottom-0 text-white w-full flex justify-center gap-10 z-20">
        <HeroArrow />
      </div>
    </div>
  );
};

export default Hero;
