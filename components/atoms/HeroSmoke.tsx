"use client";
import { motion } from "framer-motion";
import HeroWheelSmoke from "./HeroWheelSmoke";
import HeroScreenSmoke from "./HeroScreenSmoke";

const HeroSmoke = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, delay: 5 }}
        exit={{ opacity: 0 }}
        className="absolute right-0 bottom-0 w-full h-full"
      >
        <HeroScreenSmoke />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroWheelSmoke />
      </motion.div>
    </div>
  );
};

export default HeroSmoke;
