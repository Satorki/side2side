"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutQuote = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "start end"],
  });
  const scale = useTransform(scrollYProgress, [2, 0], [0, 1]);
  const opacity = useTransform(scrollYProgress, [2, 0], [0, 1]);
  const y = useTransform(scrollYProgress, [2, 0], [-100, 0]);
  // const scale = useTransform(scrollY, [0, 600], [0, 1]);
  // const opacity = useTransform(scrollY, [0, 600], [0, 1]);
  // const y = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <motion.div 
      ref={container}
      className="bg-black flex flex-1  text-white pl-10 pt-5 pr-5 pb-5 text-[1.1rem] font-jura md:text-[2rem]"
      style={{ y, scale, opacity }}
    >
      <p className="text-justify">
        Specjalizujemy się w budowie i przygotowaniu pojazdów do różnych
        dyscyplin motorsportu: <span>DRIFT</span>, OFF-ROAD, TIME ATTACK i WRACK
        RACE. Oferujemy kompleksowe wsparcie techniczne, serwis oraz transport
        na imprezy motoryzacyjne. Dzięki pasji i doświadczeniu naszego zespołu,
        każdy pojazd charakteryzuje się najwyższą jakością i precyzją wykonania,
        zapewniając konkurencyjną przewagę na torze jak i bezpieczeństwo
      </p>
    </motion.div>
  );
};

export default AboutQuote;
