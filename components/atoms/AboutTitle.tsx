"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutTitle = () => {
  const { scrollY } = useScroll();
  const colorO = useTransform(scrollY, [265, 275], ["#e35e5f", "#ffffff"]);
  const colorN = useTransform(scrollY, [285, 295], ["#e35e5f", "#ffffff"]);
  const colorA = useTransform(scrollY, [295, 305], ["#e35e5f", "#ffffff"]);
  const colorS = useTransform(scrollY, [300, 310], ["#e35e5f", "#ffffff"]);

  return (
    <div className="z-10">
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
