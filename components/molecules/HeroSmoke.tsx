"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroWheelSmoke from "../atoms/HeroWheelSmoke";
import HeroScreenSmoke from "../atoms/HeroScreenSmoke";

const HeroSmoke = () => {
  const { scrollYProgress } = useScroll();
  const hideSmoke = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, delay: 5 }}
        className="fixed right-0 bottom-0 w-full h-full z-10"
        style={{ opacity: hideSmoke }}
      >
        <HeroScreenSmoke />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        exit={{ opacity: 0 }}
        className="fixed z-10 overflow-hidden bottom-[20%] w-[10%] md:right-0 hidden md:block  h-[20%]"
        style={{ filter: "blur(2px)", opacity: hideSmoke }}
      >
        <HeroWheelSmoke />
      </motion.div>
    </div>
  );
};

export default HeroSmoke;
