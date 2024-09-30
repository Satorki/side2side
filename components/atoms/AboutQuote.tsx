"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutQuote = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [0, 1]);
  const opacity = useTransform(scrollY, [0, 600], [0, 1]);
  const y = useTransform(scrollY, [0, 600], [100, 0]);

  return (
    <motion.div
      className="from-[#850001] to-[#E35E5F] bg-gradient-to-t bg-opacity-80 rounded-3xl text-white p-5  shadow-2xl text-[1.5rem] font-jura md:text-[2rem] relative"
      style={{ y, scale, opacity }}
    >
      <h3>Garage</h3>
      <p>
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
