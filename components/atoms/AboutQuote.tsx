"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutQuote = () => {
  const { scrollYProgress } = useScroll();
  const showImage = useTransform(scrollYProgress, [0, 0.8], [-1920, -130]);
  return (
    <motion.div style={{ x: showImage }} className="bg-black bg-opacity-30 rounded-3xl text-white p-5 pl-36 m-10  md:m-20 shadow-2xl text-[1.5rem] font-jura md:text-[2rem] w-[120%] md:w-[100%]">
      <h2>Garage</h2>
      <p>
        O warsztacie Nasza firma specjalizuje się w budowie i przygotowaniu
        pojazdów do różnych dyscyplin motorsportu, takich jak <span>DRIFT</span>
        , OFF-ROAD, TIME ATTACK i WRACK RACE. Oferujemy kompleksowe wsparcie
        techniczne, serwis oraz transport na imprezy motoryzacyjne. Dzięki pasji
        i doświadczeniu naszego zespołu, każdy pojazd charakteryzuje się
        najwyższą jakością i precyzją wykonania, zapewniając konkurencyjną
        przewagę na torze jak i bezpieczeństwo
      </p>
    </motion.div>
  );
};

export default AboutQuote;
