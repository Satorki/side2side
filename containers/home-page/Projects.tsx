"use client";
import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import AboutTitle from "@/components/atoms/SectionTitle";
import CarPath from "@/components/atoms/CarPath";
import Title from "@/components/atoms/Title";
import React from "react";

const Projects = () => {
  return (
    <div id="About" className="about-container relative">
      <div className="flex items-center justify-center my-1">
        <Title title={["P", "r", "o", "j", "e", "c", "t", "s"]} />
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
          height: 100vh;
          background-image: linear-gradient(to top, #850001, #e35e5f);
        }
        .about-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
