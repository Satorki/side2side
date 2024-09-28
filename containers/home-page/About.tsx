"use client";
import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutEnter from "@/components/molecules/AboutEnter";
import AboutEnterrr from "@/components/atoms/AboutEnterrr";

const About = () => {
  const { scrollYProgress } = useScroll();
  const xPos = useTransform(scrollYProgress, [0, 1], [2000, 0]);

  return (
    <div>
      <AboutEnter />
      <AboutEnterrr />
      <div
        id="About"
        style={{ marginTop: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 grid-flow-col items-center overflow-hidden"
      >
        {/* <motion.div initial={{ x: -500 }} style={{ x: xPos }}>
          <p className="absolute top-0 text-white font-mono font-2xl font-bold">
            CAR
          </p>
        </motion.div>
        <AboutImage />
        <AboutQuote /> */}
      </div>
    </div>
  );
};

export default About;
