"use client";
import React from "react";
import HeroSmokePicture from "../../public/images/smoke.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSmoke = () => {
  return (
    <motion.div
      initial={{ x: "1000px" }}
      animate={{
        x: 0,
        transition: { duration: 1, repeat: Infinity, ease: "linear" },
      }}
    >
      <Image
        src={HeroSmokePicture}
        alt="hero background smoke picture"
        className="-z-10 absolute bottom-0 right-0 w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default HeroSmoke;
