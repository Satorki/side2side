"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  icon: JSX.Element;
  quote?: string;
  leftToRight?: boolean;
  rotating?: boolean;
}
const AnimatedTransition = ({
  icon,
  leftToRight = true,
  rotating = true,
  quote,
}: Props) => {
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

  const moveParameters = leftToRight ? [1, 0.4] : [0.4, 1];
  const rotateParameters = leftToRight ? [360 * 4, 0] : [0, 360 * 4];
  const isRotating = rotating ? [0, 1] : [0, 0];

  const moveX = useTransform(scrollYProgress, moveParameters, [offscreenX, 0]);
  const moveXQote = useTransform(scrollYProgress, moveParameters, [
    offscreenX - 200,
    0,
  ]);

  const turnAround = useTransform(
    scrollYProgress,
    isRotating,
    rotateParameters
  );

  return (
    <div
      className="overflow-hidden w-full relative font-bai"
      ref={container}
    >
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <div>
          <motion.div style={{ x: moveXQote }}>
            <p className="text-white text-[52px] md:text-[9rem] opacity-40">
              {quote}
            </p>
          </motion.div>
        </div>
        <motion.div
          style={{ x: moveX, rotate: turnAround }}
          className="w-[43px] h-[43px] md:w-[150px] md:h-[150px]"
        >
          {icon}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedTransition;
