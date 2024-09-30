"use client";
import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import React from "react";

const About = () => {
  return (
    <div id="About" className="about-container">
      <AboutQuote />
      <AboutImage />
      <style jsx>{`
        .about-container {
          padding-left: 2rem;
          padding-right: 2rem;
          display: flex;
          flex-direction: row;
          gap: 2rem;
          /* margin-top: -3rem; */
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
