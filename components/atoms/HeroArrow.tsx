"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  isLoaded: boolean;
}

const HeroArrow = ({ isLoaded }: Props) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  return (
    <motion.div
      animate={isLoaded ? { y: 0, opacity: 1 } : {}}
      initial={{ y: 200, opacity: 0 }}
      transition={{
        delay: isLoaded ? 3 : 0,
        duration: 2,
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 1,
      }}
      className="absolute bottom-0 text-white w-full  flex justify-center gap-10 z-20"
      style={{ opacity }}
    >
      <ScrollLink
        to="offersAll"
        smooth={true}
        duration={1000}
        className="rounded-full bg-slate-300 bg-opacity-40 flex justify-center items-center w-10 h-10 text-black mb-20 pt-1 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4"
        href={"#offersAll"}
        aria-label="Przewiń do sekcji ofert"
      >
        <FaArrowDown className="text-2xl" />
      </ScrollLink>
    </motion.div>
  );
};

export default HeroArrow;
