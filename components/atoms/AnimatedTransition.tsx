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

  const moveX = useTransform(scrollYProgress, moveParameters, [
    offscreenX,
    onscreenX / 1.5,
  ]);
  const moveXQote = useTransform(scrollYProgress, moveParameters, [
    offscreenX,
    0,
  ]);

  const turnAround = useTransform(
    scrollYProgress,
    isRotating,
    rotateParameters
  );

  return (
    <div className="overflow-hidden pb-4 relative" ref={container}>
      <motion.div
        style={{ x: moveX, rotate: turnAround, paddingRight: "3rem" }}
        className="w-[75px] h-[75px] md:w-[200px] md:h-[200px]"
      >
        {icon}
      </motion.div>
      <div className=" max-w-[1440px] mx-auto px-5">
        <div className="absolute top-[20%]">
          <motion.div style={{ x: moveXQote }}>
            <p className="text-white text-3xl md:text-9xl opacity-40">
              {quote}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTransition;
