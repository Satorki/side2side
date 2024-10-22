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
    <div id="about">
      <div className="about-container">
        
        {isDesktop && (
          <>
            <ImageAbout />
          </>
        )}

        <div className="description-container">
          <div className="font-bai flex flex-col gap-4">
            <h2 className="text-4xl font-semibold leading-[50px]">
              Z nami Twój pojazd osiągnie pełnie możliwości.
            </h2>
          </div>

          {!isDesktop && (
            <>
              <ImageAbout />
            </>
          )}
          <div>
            <AboutDescriptions />
          </div>
          <ButtonAction
            bgColor="#d52727"
            textColor="#FFF"
            text="Sprawdź"
            icon={<CornerRightDown />}
          />
        </div>
      </div>
      <style jsx>{`
        #about {
          margin: 2rem;
        }
        .description-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          gap: 3rem;
          color: white;
        }
        .about-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
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
            padding: 2rem 0rem 1rem 0rem;
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
