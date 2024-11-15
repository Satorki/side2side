"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  quote?: string;
  leftToRight?: boolean;
  animatedIcon?: JSX.Element;
  mustScaleDown?: boolean;
}
const AnimatedTransition = ({
  leftToRight = true,
  quote,
  animatedIcon,
  mustScaleDown,
}: Props) => {
  const container = useRef(null);
  const [offscreenX, setOffscreenX] = useState(-700);

  useEffect(() => {
    const handleResize = () => {
      setOffscreenX(-window.innerWidth);
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
  const moveXQuote = useTransform(scrollYProgress, moveParameters, [
    offscreenX,
    0,
  ]);

  return (
    <div className="max-w-[1200px] mx-auto w-full flex items-center font-jura  font-bold">
      <p
        className={`-rotate-90 text-[0.7rem] md:text-[1.6rem] mx-[-0.9rem] md:mx-[-2.2rem] opacity-40 font-bold tracking-wider xl:scale-100 mt-1 md:mt-2 ${
          mustScaleDown ? "scale-[0.65]" : "scale-100"
        }`}
      >
        OFERTA
      </p>
      <div className="overflow-hidden w-full" ref={container}>
        <div
          className={` origin-left w-full flex items-center justify-between xl:scale-100 ${
            mustScaleDown ? "scale-[0.65]" : "scale-100"
          }`}
        >
          <motion.div style={{ x: moveXQuote }}>
            <p className="text-[4rem] md:text-[9rem] opacity-40 leading-none tracking-tighter">
              {quote}
            </p>
          </motion.div>
          <div className="translate-y-1">
            {animatedIcon &&
              React.cloneElement(animatedIcon, { scrollYProgress })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTransition;
