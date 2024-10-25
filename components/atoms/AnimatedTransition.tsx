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
  const moveXQuote = useTransform(scrollYProgress, moveParameters, [
    offscreenX - 200,
    0,
  ]);

  return (
    <div className="overflow-hidden w-full relative font-bai" ref={container}>
      <div className="scale-75 xl:scale-100 transform origin-left max-w-[1200px] mx-auto w-full flex items-center justify-between text-white py-5">
        <div className="">
          <motion.div style={{ x: moveXQuote }} className="flex items-center">
            <p className="-rotate-90 text-[0.6rem] md:text-[1.5rem] mx-[-0.9rem] md:mx-[-2.4rem] opacity-40 font-bold">
              OFERTA
            </p>
            <p className="text-[52px] md:text-[9rem] opacity-40 leading-none tracking-tighter">
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
