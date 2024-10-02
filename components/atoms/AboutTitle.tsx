"use client";
// import React, { useRef } from "react";
// import { motion, useAnimation, useInView, useTransform } from "framer-motion";
// import { line } from "framer-motion/client";
import AnimatedText from "./AnimatedText";

const AboutTitle = () => {
  // const container = useRef(null);
  // const isInView = useInView(container, { once: false, amount: 0.5 });
  // const controls = useAnimation();

  // React.useEffect(() => {
  //   if (isInView) {
  //     controls.start({
  //       color: "#e35e5f",
  //     });
  //   } else {
  //     controls.start({
  //       color: "#ffffff",
  //     });
  //   }
  // }, [isInView, controls]);

  return (
    <div className="flex flex-col gap-4 md:gap-14 font-bai">
      <p className="text-2xl md:text-3xl font-bai">O Nas</p>
      <h2 className="text-5xl md:text-6xl font-bold">
        Wznosimy motorsport na
        <span>
          <AnimatedText text="wyższy" />
        </span>
        poziom.
      </h2>
    </div>
  );
};

export default AboutTitle;
