"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutQuote = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [0, 1]);
  const opacity = useTransform(scrollY, [0, 600], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <motion.div
      className="bg-gradient-to-t from-[#850001] to-[#e35e5f] m-2 rounded-3xl text-white p-5 text-[1.1rem] font-jura md:text-[2rem] relative"
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
