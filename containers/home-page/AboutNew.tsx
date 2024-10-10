import ImageAbout from "@/components/atoms/ImageAbout";
import TitleSection from "@/components/atoms/TitleSection";
import React, { useEffect, useRef, useState } from "react";
import ButtonsSocial from "@/components/atoms/ButtonsSocial";
import { motion, useScroll, useTransform } from "framer-motion";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import ButtonAction from "@/components/atoms/ButtonAction";
import AboutDescriptions from "@/components/molecules/AboutDescriptionsX";

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

  // ANIMATION
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // TITLE
  const titleMoveUp = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [200, 175, 150, 125, 100, 75, 50, 25, 0, 0, -50]
  );

  // QUOTE1
  const quote1moveRight = useTransform(scrollYProgress, [0.2, 0.3], [-1000, 0]);
  const quote1moveUp = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [150, 125, 100, 75, 50, 25, 0, 0, -50]
  );
  const quote1opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  // QUOTE2
  const quote2moveRight = useTransform(scrollYProgress, [0.4, 0.5], [-1000, 0]);
  const quote2moveUp = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [100, 75, 50, 25, 0, 0, -50]
  );
  const quote2opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  // QUOTE3
  const quote3moveRight = useTransform(scrollYProgress, [0.6, 0.7], [-1000, 0]);
  const quote3moveUp = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8, 0.9, 1],
    [50, 25, 0, 0, -50]
  );
  const quote3opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  // button
  const buttonScaleUp = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const buttonMoveUp = useTransform(
    scrollYProgress,
    [0.65, 0.7, 0.8, 0.9, 1],
    [50, 25, 0, 0, -50]
  );
  const buttonOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

  // SCREEN APPEARS
  const screenAppears = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 0.85, 1],
    [500, -1500, -1500, -1500, 500]
  );

  // QUOTES DISAPPEARS

  return (
    <div id="about" ref={container}>
      <div className="about-container">
        {isWindowMedium ? <ImageAbout /> : null}
        <motion.div
          style={{
            height: "100%",
            background: `linear-gradient(to right, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 90%)`,
            position: "absolute",
            width: "2000px",
            inset: 0,
            x: screenAppears,
          }}
        ></motion.div>
        <div className="description-container">
          <motion.div style={{ y: titleMoveUp }}>
            <TitleSection
              category=""
              title="Wznosimy motorsport na wyższy poziom."
            />
          </motion.div>
          {isWindowMedium ? null : <ImageAbout />}
          <div className="flex flex-col gap-3 text-xl font-bai leading-8 italic">
            <motion.div
              style={{
                x: quote1moveRight,
                opacity: quote1opacity,
                y: quote1moveUp,
              }}
            >
              <AboutDescriptions />
            </motion.div>
          </div>
          <motion.div
            style={{
              scale: buttonScaleUp,
              y: buttonMoveUp,
              opacity: buttonOpacity,
            }}
          >
            <ButtonAction bgColor="#850001" textColor="#FFF" text="Sprawdź" />
          </motion.div>
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
          position: sticky;
          top: 75px;
          height: 100vh;
          overflow: hidden;
        }
        #about {
          height: 300vh;
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
