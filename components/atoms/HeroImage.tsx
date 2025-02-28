"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroImagePicture from "@/public/images/Hero/Hero-Medium.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircleLoader } from "react-spinners";
import LoadingBar from "react-top-loading-bar";
import Head from "next/head";

interface Props {
  setIsLoaded: (value: boolean) => void;
}

const HeroImage = ({ setIsLoaded }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  const y = useTransform(scrollY, [0, 700], [0, 300]);

  return (
    <>
      <Head>
        <link rel="preload" as="image" href={HeroImagePicture.src} />
      </Head>
      <motion.div
        style={{ opacity: opacity, y }}
        className="w-full h-screen relative"
      >
        {!isImageLoaded && (
          <div className="z-50 flex flex-col gap-10 justify-center items-center h-screen">
            <LoadingBar color="#fff" progress={50} height={10} />
            <CircleLoader color="#fff" size={100} />
          </div>
        )}
        <Image
          src={HeroImagePicture}
          alt="hero image a car during ride on a curcuit"
          className={` absolute right-0 bottom-0 w-full h-screen object-cover 
        object-[86%] md:object-right-bottom 2xl:object-center`}
          priority={true}
          fetchPriority="high"
          onLoad={() => {
            setIsImageLoaded(true);
            setIsLoaded(true);
          }}
        />
      </motion.div>
    </>
  );
};

export default HeroImage;
