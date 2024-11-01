"use client";
import { CircleDotDashed } from "lucide-react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  scrollYProgress?: MotionValue<number>;
}

const AnimatedCircle = ({ scrollYProgress }: Props) => {
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
    [-500, 0]
  );
  const turnAround = useTransform(
    scrollYProgress ?? new MotionValue(),
    [0, 1],
    [360 * 4, 0]
  );
  const opacity = useTransform(
    scrollYProgress ?? new MotionValue(),
    [0.6, 0.4],
    [0, 1]
  );

  return (
    <motion.div
      style={{ x: moveX, rotate: turnAround, opacity }}
      className="w-[43px] h-[43px] md:w-[120px] md:h-[120px]"
    >
      <CircleDotDashed className="text-white w-[43px] h-[43px] md:w-[120px] md:h-[120px] opacity-30" />
    </motion.div>
  );
};

export default AnimatedCircle;
