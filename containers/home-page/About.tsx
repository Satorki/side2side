"use client";
import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import AboutTitle from "@/components/atoms/AboutTitle";
import React, { useEffect, useState } from "react";
import ButtonAction from "@/components/atoms/ButtonAction";

const About = () => {
  const [isWindowMedium, setIsWindowMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowMedium(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="About">
      <div className="about-container">
        <div className="flex flex-col gap-14 flex-1">
          <AboutTitle />
          {isWindowMedium ? null : <AboutImage />}
          <AboutQuote />
          <ButtonAction />
        </div>
        {isWindowMedium ? <AboutImage /> : null}
      </div>
      <style jsx>{`
        #About {
          background-image: radial-gradient(circle at 30% 70%,#850001, #e35e5f);
        }
        .about-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 5rem;
          align-items: center;
          color: #fff;
          padding: 5rem;
          max-width: 1440px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
            #About {
            flex-direction: column;
            padding: 1rem;
            background-image: radial-gradient(circle at 50% 70%,#850001, #e35e5f);
          }
      `}</style>
    </div>
  );
};

export default About;
