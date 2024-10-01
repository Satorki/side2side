"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutQuote = () => {
  // const scale = useTransform(scrollY, [0, 600], [0, 1]);
  // const opacity = useTransform(scrollY, [0, 600], [0, 1]);
  // const y = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <motion.div
      className="bg-gradient-to-r from-black via-gray-800 to-black flex flex-1 text-white p-10 rounded-lg shadow-lg 
             text-[1.1rem] font-sans md:text-[1.4rem] leading-relaxed tracking-wide"
    >
      <p className="text-justify">
        Wznosimy motorsport na wyższy poziom.
        <br />
        <br />Tworzymy pojazdy, które
        przekraczają granice w takich dyscyplinach jak
        <span className="text-red-500 font-semibold"> DRIFT</span>,
        <span className="text-green-500 font-semibold"> OFF-ROAD</span>,
        <span className="text-blue-500 font-semibold"> TIME ATTACK</span> oraz
        <span className="text-yellow-500 font-semibold"> WRACK RACE</span>.
        <br />
        <br />Oferujemy pełne wsparcie techniczne, serwis i transport na imprezy
        motoryzacyjne. Z naszą pasją i precyzją, Twoje auto zyska przewagę i
        niezawodność zarówno na torze, jak i poza nim.
      </p>
    </motion.div>
  );
};

export default AboutQuote;
