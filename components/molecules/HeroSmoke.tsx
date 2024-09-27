"use client";
import { motion } from "framer-motion";
import HeroWheelSmoke from "../atoms/HeroWheelSmoke";
import HeroScreenSmoke from "../atoms/HeroScreenSmoke";

const HeroSmoke = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, delay: 1 }}
        className="fixed bottom-0 w-full  h-full z-10"
      >
        <HeroScreenSmoke />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        exit={{ opacity: 0 }}
        className="fixed z-10 overflow-hidden bottom-[20%] w-[10%] md:right-0  hidden md:block h-[20%]"
        style={{ filter: "blur(2px)" }}
      >
        <HeroWheelSmoke />
      </motion.div>
    </div>
  );
};

export default HeroSmoke;
