"use client";
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
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const textAppears2 = useTransform(scrollYProgress, [0.33, 0.66], [-800, 0]);
  const textAppears3 = useTransform(scrollYProgress, [0.7, 0.99], [-800, 0]);
  const textOpacity2 = useTransform(scrollYProgress, [0.5, 0.66], [0, 1]);
  const textOpacity3 = useTransform(scrollYProgress, [0.9, 0.99], [0, 1]);

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

  return (
    <div id="about" ref={container}>
      <div className="about-container">
        <div className="flex flex-col gap-10 md:gap-14 flex-1">
          <SectionTitle />
          {isWindowMedium ? null : <AboutImage />}
          <div>
            <AboutQuote
              quote="Side2Side Motorsport powstało z pasji do motorsportu i potrzeby
        oferowania wysokiej jakości serwisu pojazdów, zarówno tych codziennego
        użytku, jak i przeznaczonych do sportu."
            />
          </div>
          <motion.div style={{ x: textAppears2, opacity: textOpacity2 }}>
            <AboutQuote
              quote="Nasz zespół to doświadczeni mechanicy, specjalizujący się w obsłudze
        pojazdów sportowych oraz flot firmowych."
            />
          </motion.div>
          <motion.div style={{ x: textAppears3, opacity: textOpacity3 }}>
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
        </div>
        {isWindowMedium ? <AboutImage /> : null}
      </div>

      <div className="about-2"></div>

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
          top: 75px;
        }

        .about-2 {
          height: 100vh;
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
            position: static;
          }
          .sticker {
            position: sticky;
            top: 65px;
          }
          .about-2 {
            height: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
