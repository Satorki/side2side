"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TitleProps {
  title: Array<string>;
}

const Title = ({ title }: TitleProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const colorO = useTransform(scrollYProgress, [0, 1], ["#e35e5f", "#ffffff"]);
  const colorN = useTransform(
    scrollYProgress,
    [285, 295],
    ["#e35e5f", "#ffffff"]
  );
  const colorA = useTransform(
    scrollYProgress,
    [295, 305],
    ["#e35e5f", "#ffffff"]
  );
  const colorS = useTransform(
    scrollYProgress,
    [300, 310],
    ["#e35e5f", "#ffffff"]
  );

  return (
    <div className="z-10 bg-[#e35e5f] font-jura" ref={ref}>
      {title.map((text, index) => (
        <motion.span
          key={index}
          style={{ color: colorO }}
          className="rounded-lg text-[2rem] font-bold"
        >
          {text}
        </motion.span>
      ))}
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

export default Title;
