"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircleDotDashed } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const AnimatedTransition = () => {
  const container = useRef(null);
  const [offscreenX, setOffscreenX] = useState(-700);
  const [onscreenX, setOnscreenX] = useState(2700);

  useEffect(() => {
    const handleResize = () => {
      setOffscreenX(-window.innerWidth);
      setOnscreenX(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "start end"],
  });

  const leftToRight = useTransform(
    scrollYProgress,
    [1, 0],
    [offscreenX, onscreenX]
  );
  const turnAround = useTransform(scrollYProgress, [1, 0], [0, 360 * 4]);

  return (
    <div className="overflow-hidden" ref={container}>
      <motion.div
        style={{ x: leftToRight, rotate: turnAround }}
        className="w-[75px] h-[75px] md:w-[300px] md:h-[300px]"
      >
        <CircleDotDashed className="text-white w-[75px] h-[75px] md:w-[300px] md:h-[300px] opacity-50" />
      </motion.div>
    </div>
  );
};

export default AnimatedTransition;
