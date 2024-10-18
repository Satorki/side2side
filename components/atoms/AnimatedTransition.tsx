"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircleDotDashed } from "lucide-react";
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

  const moveX = useTransform(scrollYProgress, moveParameters, [offscreenX, 0]);
  const moveXQote = useTransform(scrollYProgress, moveParameters, [
    offscreenX - 200,
    0,
  ]);

  const turnAround = useTransform(scrollYProgress, [0, 1], rotateParameters);

  return (
    <div className="overflow-hidden w-full relative font-bai" ref={container}>
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <div>
          <motion.div style={{ x: moveXQote }}>
            <p className="text-white text-[52px] md:text-[9rem] opacity-40">
              {quote}
            </p>
          </motion.div>
        </div>
        {animatedIcon && React.cloneElement(animatedIcon, { scrollYProgress })}
      </div>
    </div>
  );
};

export default AnimatedTransition;
