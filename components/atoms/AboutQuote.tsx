"use client";
import { motion } from "framer-motion";

const AboutQuote = () => {
  return (
    <motion.div className="bg-black bg-opacity-80 rounded-3xl text-white p-5  shadow-2xl text-[1.5rem] font-jura md:text-[2rem]">
      <h3>Garage</h3>
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
