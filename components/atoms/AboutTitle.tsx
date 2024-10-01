"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutTitle = () => {
  const container = useRef(null);
  const { scrollY } = useScroll();
  const colorO = useTransform(scrollY, [270, 275], ["#e35e5f", "#ffffff"]);
  const colorN = useTransform(scrollY, [290, 295], ["#e35e5f", "#ffffff"]);
  const colorA = useTransform(scrollY, [300, 305], ["#e35e5f", "#ffffff"]);
  const colorS = useTransform(scrollY, [305, 310], ["#e35e5f", "#ffffff"]);

  return (
    <div ref={container}>
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
