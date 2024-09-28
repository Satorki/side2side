"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import car from "../../public/images/garage-car.png";
import nocar from "../../public/images/garage-nocar.png";
import Image from "next/image";

const AboutEnter = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const carOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const garageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const zoomIn = useTransform(scrollYProgress, [0, 5], [1, 5]);

  return (
    <div className="relative -mt-[90px]" ref={container}>
      <div className="w-full">
        <motion.div
          className="w-full h-screen"
          style={{
            position: "sticky",
            inset: 0,
            zoom: zoomIn,
            opacity: garageOpacity,
          }}
        >
          <Image src={nocar} alt="nocar" layout="fill" objectFit="cover" />
        </motion.div>
        <motion.div
          style={{ position: "sticky", inset: 0, opacity: carOpacity }}
          className="top-[70px] w-full h-screen z-10"
        >
          <Image src={car} alt="car" layout="fill" objectFit="cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutEnter;
