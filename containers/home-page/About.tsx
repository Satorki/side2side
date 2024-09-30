"use client";
import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import CarPath from "@/components/atoms/CarPath";
import React from "react";

const About = () => {
  return (
    <div id="About" className="about-container relative ">
      <h2 className="text-3xl font-bold text-white">O NAS</h2>
      <CarPath />
      <div className="from-[#850001] to-[#E35E5F] bg-gradient-to-t bg-opacity-80">
        <AboutQuote />
        <AboutImage />
      </div>
      <style jsx>{`
        .about-container {
          padding-left: 2rem;
          padding-right: 2rem;
          display: flex;
          flex-direction: row;
          gap: 2rem;
          margin-top: 1rem;
        }
        @media (max-width: 768px) {
          .about-container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
