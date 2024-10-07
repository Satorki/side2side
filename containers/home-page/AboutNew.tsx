import AboutNewImage from "@/components/atoms/AboutNewImage";
import AboutNewTitle from "@/components/atoms/AboutNewTitle";
import ButtonAction from "@/components/atoms/ButtonAction";
import AboutNewDescriptions from "@/components/molecules/AboutDescriptions";
import React from "react";

const AboutNew = () => {
  return (
    <div id="about">
      <div className="about-container">
        <AboutNewImage />
        <div className="description-container">
          <AboutNewTitle />
          <AboutNewDescriptions />
          <ButtonAction text="Zobacz więcej" />
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
          padding: 2rem;
          gap: 2rem;
          color: white;
          padding-right: 25%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-container {
          position: relative;
          height: 100vh;

        }
      `}</style>
    </div>
  );
};

export default AboutNew;
