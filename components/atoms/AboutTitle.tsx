"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutTitle = () => {
  const { scrollYProgress } = useScroll();
  const colorO = useTransform(scrollYProgress, [0, 0.1], ["#e35e5f", "white"]);
  const colorN = useTransform(scrollYProgress, [0, 0.2], ["white", "#e35e5f"]);
  const colorA = useTransform(scrollYProgress, [0, 0.7], ["white", "#e35e5f"]);
  const colorS = useTransform(scrollYProgress, [0, 0.8], ["white", "#e35e5f"]);

  return (
    <div>
      <motion.span
        style={{ color: colorO }}
        className="rounded-lg text-[2rem] font-bold ml-4"
      >
        O
      </motion.span>
      <motion.span
        style={{ color: colorN }}
        className="text-[2rem] font-bold ml-4"
      >
        N
      </motion.span>
      <motion.span style={{ color: colorA }} className="text-[2rem] font-bold">
        A
      </motion.span>
      <motion.span
        style={{ color: colorS }}
        className="rounded-lg text-[2rem] font-bold"
      >
        S
      </motion.span>
    </div>
  );
};

export default AboutTitle;
