"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  icon: JSX.Element;
  leftToRight?: boolean;
  rotating?: boolean;
}
const AnimatedTransition = ({
  icon,
  leftToRight = true,
  rotating = true,
}: Props) => {
  const container = useRef(null);
  const [offscreenX, setOffscreenX] = useState(-700);
  const [onscreenX, setOnscreenX] = useState(2700);

  const quote = "Profejsonalny Serwis";

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

  const moveParameters = leftToRight ? [1, 0] : [0, 1];
  const rotateParameters = leftToRight ? [360 * 4, 0] : [0, 360 * 4];
  const isRotating = rotating ? [0, 1] : [0, 0];

  const moveX = useTransform(scrollYProgress, moveParameters, [
    offscreenX,
    onscreenX,
  ]);

  const letterOpacity = (index: number) =>
    useTransform(scrollYProgress, [0.6, 0], [index * -0.1, 0.7]);

  const turnAround = useTransform(
    scrollYProgress,
    isRotating,
    rotateParameters
  );

  return (
    <div className="overflow-hidden" ref={container}>
      <motion.div
        style={{ x: moveX, rotate: turnAround }}
        className="w-[75px] h-[75px] md:w-[200px] md:h-[200px]"
      >
        {icon}
      </motion.div>
      <div className="max-w-[1440px] mx-auto">
        <motion.div className="absolute -translate-y-14 xl:-translate-y-40">
          <p className="text-white text-3xl xl:text-9xl">
            {quote.split("").map((letter, index) => (
              <motion.span
                key={index}
                style={{ opacity: letterOpacity(index) }}
              >
                {letter}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedTransition;
