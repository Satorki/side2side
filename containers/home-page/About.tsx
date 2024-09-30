"use client";
import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import AboutTitle from "@/components/atoms/AboutTitle";
import CarPath from "@/components/atoms/CarPath";
import React from "react";

const About = () => {
  return (
    <div id="About" className="about-container relative ">
      <div>
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
          justify-content: center;
          gap: 5px;
          margin-top: 1rem;
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
