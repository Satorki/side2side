"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutQuote = () => {
  return (
    <motion.div className="bg-black bg-opacity-30 rounded-3xl text-white p-5 m-10  shadow-2xl text-[1.5rem] font-jura md:text-[2rem]">
      <h2>Garage</h2>
      <p>
        Specjalizujemy się w budowie i przygotowaniu
        pojazdów do różnych dyscyplin motorsportu: <span>DRIFT</span>
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
