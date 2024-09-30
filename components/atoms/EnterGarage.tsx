"use client";
import Image from "next/image";
import React from "react";
import HeroImagePicture from "../../public/images/garage-nocar.png";
import { motion, useScroll, useTransform } from "framer-motion";

const EnterGarage = () => {
  const { scrollY } = useScroll();
  const hideImage = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 2]);
  const opa = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div
      style={{ y: hideImage, scale: opacity, opacity: opa }}
      className="w-full h-screen relative z-10"
    >
      <Image
        src={HeroImagePicture}
        alt="hero image a car during ride on a curcuit"
        className=" right-0  bottom-0 w-full h-screen object-cover
      object-[86%]  md:object-right-bottom 2xl:object-center"
      />
    </motion.div>
  );
};

export default EnterGarage;
