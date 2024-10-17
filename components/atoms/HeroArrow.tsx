"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@nextui-org/react";

interface Props {
  isLoaded: boolean;
}

const HeroArrow = ({ isLoaded }: Props) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  return (
    <motion.div
      animate={isLoaded ? { y: 0, opacity: 1 } : {}}
      initial={{ y: 100, opacity: 0 }}
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
      <Link
        className="rounded-full bg-slate-300 bg-opacity-40 flex justify-center items-center w-10 h-10 text-black mb-4 pt-1 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4"
        href="#About"
      >
        <FaArrowDown className="text-2xl" />
      </Link>
    </motion.div>
  );
};

export default HeroArrow;
