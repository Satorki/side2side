import HeroArrow from "@/components/atoms/HeroArrow";
import HeroImage from "@/components/atoms/HeroImage";
import HeroTitle from "@/components/atoms/HeroTitle";
import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <HeroTitle />
      <HeroImage />
      <HeroArrow />
    </div>
  );
};

export default Hero;
