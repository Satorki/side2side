"use client";
import Image from "next/image";
import React from "react";
import HeroImagePicture from "../../public/images/Hero-High.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroImage = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  const y = useTransform(scrollY, [0, 700], [0, 300]);

  return (
    <motion.div style={{ opacity, y }} className="w-full h-screen">
      <Image
        src={HeroImagePicture}
        alt="hero image a car during ride on a curcuit"
        className=" absolute right-0  bottom-0 w-full h-screen object-cover
      object-[86%]  md:object-right-bottom 2xl:object-center"
      />
    </motion.div>
  );
};

export default HeroImage;
