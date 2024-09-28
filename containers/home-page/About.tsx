"use client";
import AboutImage from "@/components/atoms/AboutImage";
import AboutQuote from "@/components/atoms/AboutQuote";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import CarIcon from "../../public/images/car-icon.png";

const About = () => {
  const { scrollYProgress } = useScroll();
  const iconMove = useTransform(scrollYProgress, [0, 1.5], [300, 20]);

  return (
    <div id="About">
      <motion.div
      style={{ x: iconMove, position: "absolute" }}>
        <Image
          src={CarIcon}
          alt="car icon"
          width={30}
          style={{ rotate: "-90deg" }}
        />
      </motion.div>
      <h2>O NAS</h2>
      <AboutQuote />
      <AboutImage />
      <style jsx>{`
        .about-container {
          margin-left: 2rem;
          margin-right: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          /* margin-top: -3rem; */
        }
      `}</style>
    </div>
  );
};

export default About;
