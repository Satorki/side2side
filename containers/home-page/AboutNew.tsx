import ImageAbout from "@/components/atoms/ImageAbout";
import ButtonAction from "@/components/atoms/ButtonAction";
import TitleSection from "@/components/atoms/TitleSection";
import AboutNewDescriptions from "@/components/molecules/AboutDescriptions";
import React, { useEffect, useState } from "react";
import ButtonsSocial from "@/components/atoms/ButtonsSocial";

const AboutNew = () => {
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
    <div id="about">
      <div className="about-container">
        {isWindowMedium ? <ImageAbout /> : null}
        <div className="description-container">
          <TitleSection
            category="O Nas"
            title="Wznosimy motorsport na wyższy poziom."
          />
          {isWindowMedium ? null : <ImageAbout />}
          <AboutNewDescriptions />
          <div className="flex justify-center items-center gap-2 border p-4">
            <p>Obserwuj nas na: </p>
            <ButtonsSocial />
          </div>
        </div>
      </div>

      <style jsx>{`
        .description-container {
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 0) 90%
          );
          position: absolute;
          top: 0;
          left: 0;
          width: 75%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          gap: 2rem;
          color: white;
          padding-right: 25%;
          padding-left: 2rem;
        }
        .about-container {
          position: relative;
          height: 100vh;
        }
        @media (min-width: 1440px) {
          .description-container {
            padding-left: 20%;
          }
        }
        @media (max-width: 768px) {
          .about-container {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            positon: static;
            height: 100%;
          }
          .description-container {
            position: static;
            background: black;
            width: 100%;
            height: 100%;
            padding: 1rem;
          }
      `}</style>
    </div>
  );
};

export default AboutNew;
