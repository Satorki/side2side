"use client";
import Image from "next/image";
import background from "../../public/images/background1.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundImageInMotion = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [-300, 100]);

  return (
    <div ref={container} className="relative w-full h-[30vh]">
      <motion.div style={{ y: parallax }}
        className="absolute top-0 left-0 w-full h-[100vh] z-[-1]">
        <Image
          src={background}
          alt="background image"
          fill
          objectFit="cover"
          priority
        />
      </motion.div>
    </div>
  );
};

export default BackgroundImageInMotion;
