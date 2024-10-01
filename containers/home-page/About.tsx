"use client";
import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import AboutTitle from "@/components/atoms/AboutTitle";
import CarPath from "@/components/atoms/CarPath";
import React from "react";

const About = () => {
  return (
    <div id="About" className="about-container relative ">
      <div className="flex items-center justify-center">
        <AboutTitle />
        <CarPath />
      </div>
      <div className="about-content">
        <AboutQuote />
        <AboutImage />
      </div>
      <style jsx>{`
        .about-container {
          display: flex;
          flex-direction: column;
          gap: 5px;
          height: 100vh;
          background-image: linear-gradient(to top, #850001, #e35e5f);
          /* bg-gradient-to-t from-[#850001] to-[#e35e5f] */
        }
        .about-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          gap: 10px;
        }
        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
          }
      `}</style>
    </div>
  );
};

export default About;
