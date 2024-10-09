"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroImagePicture from "../../public/images/Hero-High.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircleLoader } from "react-spinners";
import LoadingBar from "react-top-loading-bar";
import LogoImage from "@/public/images/Logos/logo-long-no-bckg.png";

const HeroImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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
        priority={true}
        onLoadingComplete={() => setIsLoaded(true)}
      />
      {isLoaded && (
        <div className="flex justify-center items-center h-screen">
          <LoadingBar color="#fff" progress={100} height={10} />;
          <Image src={LogoImage} alt="loading image" />
          <CircleLoader color="#fff" />
        </div>
      )}
    </motion.div>
  );
};

export default HeroImage;
