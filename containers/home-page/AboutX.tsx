"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import React, { useEffect, useRef, useState } from "react";
import ButtonAction from "@/components/atoms/ButtonAction";
import SectionTitle from "@/components/atoms/SectionTitle";

const About = () => {
  // QUOTES ANIMATION
  const container = useRef(null);
  const containerEnd = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgressEnd } = useScroll({
    target: containerEnd,
    offset: ["start start", "end end"],
  });

  const textAppears1 = useTransform(
    scrollYProgress,
    [-0.11, 0.01, 0.03],
    [1, 1.02, 1]
  );
  const textAppears2 = useTransform(
    scrollYProgress,
    [0.22, 0.33, 0.35],
    [1, 1.02, 1]
  );
  const textAppears3 = useTransform(
    scrollYProgress,
    [0.55, 0.66, 0.69],
    [1, 1.02, 1]
  );

  const textOpacity1 = useTransform(scrollYProgress, [-0.11, 0.01], [0.1, 1]);
  const textOpacity2 = useTransform(scrollYProgress, [0.22, 0.33], [0.1, 1]);
  const textOpacity3 = useTransform(scrollYProgress, [0.66, 0.77], [0.1, 1]);

  const containerOpacity = useTransform(scrollYProgressEnd, [0.8, 0], [1, 0]);
  const containerY = useTransform(scrollYProgressEnd, [0.8, 0], [0, 500]);

  // SCREEN SIZE HANDLER
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

    // // QUOTE2
    // const quote2moveRight = useTransform(scrollYProgress, [0.4, 0.5], [-1000, 0]);
    // const quote2moveUp = useTransform(
    //   scrollYProgress,
    //   [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    //   [100, 75, 50, 25, 0, 0, -50]
    // );
    // const quote2opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  
    // // QUOTE3
    // const quote3moveRight = useTransform(scrollYProgress, [0.6, 0.7], [-1000, 0]);
    // const quote3moveUp = useTransform(
    //   scrollYProgress,
    //   [0.6, 0.7, 0.8, 0.9, 1],
    //   [50, 25, 0, 0, -50]
    // );
    // const quote3opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  return (
    <div id="about" ref={container}>
      <div className="about-container">
        <motion.div
          className="flex flex-col gap-10 md:gap-14 flex-1"
          style={{ opacity: containerOpacity, y: containerY }}
        >
          <SectionTitle />
          {isWindowMedium ? null : <AboutImage />}
          <motion.div style={{ opacity: textOpacity1, scale: textAppears1 }}>
            <AboutQuote
              quote="Side2Side Motorsport powstało z pasji do motorsportu i potrzeby
        oferowania wysokiej jakości serwisu pojazdów, zarówno tych codziennego
        użytku, jak i przeznaczonych do sportu."
            />
          </motion.div>
          <motion.div style={{ opacity: textOpacity2, scale: textAppears2 }}>
            <AboutQuote
              quote="Nasz zespół to doświadczeni mechanicy, specjalizujący się w obsłudze
        pojazdów sportowych oraz flot firmowych."
            />
          </motion.div>
          <motion.div style={{ opacity: textOpacity3, scale: textAppears3 }}>
            <AboutQuote
              quote="Oferujemy pełne wsparcie techniczne, serwis i transport na imprezy
        motoryzacyjne. Z naszą pasją i precyzją, Twoje auto zyska przewagę i
        niezawodność zarówno na torze, jak i poza nim."
            />
          </motion.div>
          <ButtonAction
            bgColor="#000000"
            textColor="text-white"
            text="Sprawdź"
          />
        </motion.div>

        <motion.div
          style={{ opacity: containerOpacity, y: containerY }}
          className="flex-1"
        >
          {isWindowMedium ? <AboutImage /> : null}
        </motion.div>
      </div>

      <div className="about-2" ref={containerEnd}></div>
      <style jsx>{`
        #about {
          background-image: radial-gradient(
            circle at 30% 70%,
            #850001,
            #e35e5f
          );
        }
        .about-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 5rem;
          align-items: center;
          color: #fff;
          padding: 4rem;
          max-width: 1440px;
          margin: 0 auto;
          position: sticky;
          top: 80px;
          height: 83vh;
        }

        .about-2 {
          height: 60vh;
        }
        @media (max-width: 768px) {
          .about-container {
            flex-direction: column;
            padding: 1rem;
            background-image: radial-gradient(
              circle at 50% 70%,
              #850001,
              #e35e5f
            );
            gap: 1rem;
            postion: relative;
            height: auto;
          }
          .about-2 {
            height: 0vh;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
