import ImageAbout from "@/components/atoms/ImageAbout";
import TitleSection from "@/components/atoms/TitleSection";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonAction from "@/components/atoms/ButtonAction";
import AboutDescriptions from "@/components/molecules/AboutDescriptions";
import { CornerRightDown } from "lucide-react";

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
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
  const titleMoveUpDesktop = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
    [150, 125, 100, 75, 50, 25, 0]
  );

  // QUOTE
  const quote1moveUp = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
    [150, 125, 100, 75, 50, 25, 0]
  );
  const quote1opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  // BUTTON
  const buttonScaleUp = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.2, 0.25],
    [0, 1, 1.1, 1]
  );
  const buttonOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const buttonMoveUp = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5, 0.6],
    [100, 75, 50, 25, 0]
  );

  // SCREEN APPEARS
  const screenAppears = useTransform(
    scrollYProgress,
    [0.8, 0.85, 1],
    [-1500, -1500, 500]
  );

  // LOADING BAR
  const scrollBar = useTransform(scrollYProgress, [0, 0.6], [0, 300]);

  return (
    <div className="about" ref={container}>
      <div className="about-container">
        {isDesktop && (
          <>
            <ImageAbout />
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
          </>
        )}

        <div className="description-container">
          <motion.div style={{ y: isDesktop ? titleMoveUpDesktop : "" }}>
            <TitleSection
              category=""
              titleBegining="Z nami Twój pojazd osiągnie pełnię możliwości."
              titleEnding=""
            />
          </motion.div>

          {!isDesktop && (
            <>
              <motion.div
                style={{
                  borderLeft: "solid #d52727",
                  borderLeftWidth: scrollBar,
                  width: "100%",
                  height: "5px",
                }}
              ></motion.div>
              <ImageAbout />
            </>
          )}
          <div>
            <motion.div
              style={{
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
            <ButtonAction
              bgColor="#d52727"
              textColor="#FFF"
              text="Sprawdź"
              icon={<CornerRightDown />}
            />
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
          gap: 3rem;
          color: white;
          padding-right: 25%;
          padding-left: 2rem;
        }
        .about-container {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }
        .about {
          height: 250vh;
        }
        @media (min-width: 1440px) {
          .description-container {
            padding-left: 20%;
          }
        }
        @media (max-width: 768px) {
          .description-container {
            position: static;
            background: black;
            width: 100%;
            height: auto;
            color: white;
            gap: 1.5rem;
            padding: 2rem;
          }
          .about-container {
            display: flex;
            flex-direction: column;
            padding: 1rem 0rem;
            height: auto;
          }
          .about-mobile {
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
