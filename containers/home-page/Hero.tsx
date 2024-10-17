"use client";
import HeroArrow from "@/components/atoms/HeroArrow";
import HeroImage from "@/components/atoms/HeroImage";
import HeroSmoke from "@/components/molecules/HeroSmoke";
import HeroTitle from "@/components/atoms/HeroTitle";
import { useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      id="hero"
      className="hero-container h-screen bg-black overflow-hidden relative"
    >
      <HeroTitle isLoaded={isLoaded} />
      <HeroImage setIsLoaded={setIsLoaded} />
      <HeroSmoke isLoaded={isLoaded} />
      <HeroArrow isLoaded={isLoaded} />
      <style jsx>{`
        .hero-container {
          margin-top: -75px;
        }
        @media (max-width: 768px) {
          .hero-container {
            margin-top: -59px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
