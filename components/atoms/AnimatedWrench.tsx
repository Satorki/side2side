"use client";
import { Wrench } from "lucide-react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  scrollYProgress?: MotionValue<number>;
}

const AnimatedWrench = ({ scrollYProgress }: Props) => {
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

  const moveX = useTransform(
    scrollYProgress ?? new MotionValue(),
    [1, 0.4],
    [offscreenX, 0]
  );
  const turnAround = useTransform(
    scrollYProgress ?? new MotionValue(),
    [0, 0.3, 0.4, 0.6, 0.8, 1],
    [20, -20, 20, -20, 20, -20]
  );
  const opacity = useTransform(
    scrollYProgress ?? new MotionValue(),
    [1, 0.1],
    [0, 1]
  );

  return (
    <motion.div
      style={{ opacity, rotate: turnAround }}
      className="transform origin-top-right top-3 right-10 absolute"
    >
      <Wrench className="text-white w-[43px] h-[43px] md:w-[130px] md:h-[130px] opacity-30" />
    </motion.div>
  );
};

export default AnimatedWrench;
