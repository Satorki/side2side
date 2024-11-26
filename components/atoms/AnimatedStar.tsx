"use client";
import { Star } from "lucide-react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress?: MotionValue<number>;
}

const AnimatedStar = ({ scrollYProgress }: Props) => {
  const scale = useTransform(
    scrollYProgress ?? new MotionValue(),
    [0.1, 0.3, 1],
    [1, 1.2, 0]
  );
  const opacity = useTransform(
    scrollYProgress ?? new MotionValue(),
    [0.6, 0.4],
    [0, 1]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-[43px] h-[43px] md:w-[120px] md:h-[120px]"
    >
      <Star className="text-white w-[43px] h-[43px] md:w-[120px] md:h-[120px] opacity-30" />
    </motion.div>
  );
};

export default AnimatedStar;
