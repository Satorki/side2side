"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

interface Props {
  isLoaded: boolean;
}

const HeroTitle = ({ isLoaded }: Props) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);
  const y = useTransform(scrollY, [150, 0], [-100, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute z-20 flex flex-col items-center w-full  top-[22%] overflow-hidden"
    >
      <h1 className="text-6xl md:text-8xl 2xl:text-9xl flex tracking-tight font-bold font-libre">
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={isLoaded ? { x: 0, opacity: 1 } : {}}
          transition={{
            delay: isLoaded ? 0.8 : 0,
            type: "spring",
            stiffness: 1000,
            damping: 100,
            mass: 1,
          }}
        >
          SIDE
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={isLoaded ? { scale: 1 } : {}}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 30,
            mass: 1,
          }}
          className="text-[--red]"
        >
          2
        </motion.div>
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={isLoaded ? { x: 0, opacity: 1 } : {}}
          transition={{
            delay: isLoaded ? 1.5 : 0,
            type: "spring",
            stiffness: 1000,
            damping: 100,
            mass: 1,
          }}
        >
          SIDE
        </motion.div>
      </h1>
      <div className="flex gap-2 font-bold">
        <motion.span
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ delay: isLoaded ? 2.2 : 0, duration: 0.8 }}
        >
          Serwis Tunning Motorsport
        </motion.span>
      </div>
    </motion.div>
  );
};

export default HeroTitle;
