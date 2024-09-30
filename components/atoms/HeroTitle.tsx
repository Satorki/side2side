"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const HeroTitle = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);
  const y = useTransform(scrollY, [150, 0], [-100, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute z-20 flex flex-col items-center w-full  top-[22%] overflow-hidden"
    >
      <h1 className="text-6xl md:text-8xl flex tracking-tight font-bold font-libre">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
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
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
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
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.5,
            type: "spring",
            stiffness: 1000,
            damping: 100,
            mass: 1,
          }}
        >
          SIDE
        </motion.div>
      </h1>
      <div className="flex gap-2">
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Serwis
        </motion.span>
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2.3, duration: 0.5 }}
        >
          Tunning
        </motion.span>
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 2.6, duration: 0.55 }}
        >
          Motorsport
        </motion.span>
      </div>
    </motion.div>
  );
};

export default HeroTitle;
