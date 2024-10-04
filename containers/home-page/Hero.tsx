"use client";
import HeroArrow from "@/components/atoms/HeroArrow";
import HeroImage from "@/components/atoms/HeroImage";
import HeroSmoke from "@/components/molecules/HeroSmoke";
import HeroTitle from "@/components/atoms/HeroTitle";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-container h-screen bg-black overflow-hidden relative"
    >
      <HeroTitle />
      <HeroImage />
      <HeroSmoke />
      <HeroArrow />
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
