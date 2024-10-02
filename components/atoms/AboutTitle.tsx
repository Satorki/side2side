"use client";
import React, { useRef } from "react";
import { motion, useAnimation, useInView, useTransform } from "framer-motion";

const AboutTitle = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: false, amount: 0.5 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        color: "#000000",
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
      });
    } else {
      controls.start({
        color: "#ffffff",
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
      });
    }
  }, [isInView, controls]);

  return (
    <div className="flex flex-col gap-14 font-bai" ref={container}>
      <p className="text-2xl md:text-3xl font-bai">O Nas</p>
      <h2 className="text-5xl md:text-6xl font-bold">
        Wznosimy motorsport na{" "}
        <motion.span animate={controls}>wyższy</motion.span> poziom.
      </h2>
    </div>
  );
};

export default AboutTitle;
