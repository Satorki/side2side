"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  quote?: string;
  leftToRight?: boolean;
  animatedIcon?: JSX.Element;
}
const AnimatedTransition = ({
  leftToRight = true,
  quote,
  animatedIcon,
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
  const moveXQote = useTransform(scrollYProgress, moveParameters, [
    offscreenX - 200,
    0,
  ]);

  return (
    <div className="overflow-hidden w-full relative font-bai" ref={container}>
      <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
        {animatedIcon && React.cloneElement(animatedIcon, { scrollYProgress })}
        <div>
          <motion.div style={{ x: moveXQote }}>
            <p className="text-white text-[52px] md:text-[9rem] opacity-40">
              {quote}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTransition;
