"use client";
import { Wrench } from "lucide-react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress?: MotionValue<number>;
}

const AnimatedCircle = ({ scrollYProgress }: Props) => {
  const turnAround = useTransform(
    scrollYProgress ?? new MotionValue(),
    [0, 1],
    [360 * 2, 0]
  );
  const opacity = useTransform(
    scrollYProgress ?? new MotionValue(),
    [0.6, 0.4],
    [0, 1]
  );

  return (
    <motion.div
      style={{ rotate: turnAround, opacity }}
      className="w-[43px] h-[43px] md:w-[120px] md:h-[120px]"
    >
      <Wrench className=" w-[43px] h-[43px] md:w-[120px] md:h-[120px] opacity-30" />
    </motion.div>
  );
};

export default AnimatedCircle;
