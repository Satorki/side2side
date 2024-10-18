"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import {
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
} from "lucide-react";

interface Props {
  scrollYProgress?: MotionValue<number>;
}

const AnimatedProgress = ({ scrollYProgress }: Props) => {
  const opacity = useTransform(scrollYProgress ?? new MotionValue(), [1, 0.3], [0,1]);
  const opacity1 = useTransform(scrollYProgress ?? new MotionValue(), [0.6, 0.5], [0,0.2]);
  const opacity2 = useTransform(scrollYProgress ?? new MotionValue(), [0.5, 0.4], [0,0.3]);
  const opacity3 = useTransform(scrollYProgress ?? new MotionValue(), [0.4, 0.35], [0,0.3]);
  const opacity4 = useTransform(scrollYProgress ?? new MotionValue(), [0.3, 0.25], [0,0.3]);
  const opacity5 = useTransform(scrollYProgress ?? new MotionValue(), [0.2, 0.1], [0,0.5]);

  return (
<motion.div
  style={{ opacity }}
  className="relative w-[43px] h-[43px] md:w-[150px] md:h-[150px]"
>
  <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 flex justify-center items-center">
    <SignalZero className="text-white w-[43px] h-[43px] md:w-[150px] md:h-[150px]" />
  </motion.div>
  <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 flex justify-center items-center">
    <SignalLow className="text-white w-[43px] h-[43px] md:w-[150px] md:h-[150px]" />
  </motion.div>
  <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 flex justify-center items-center">
    <SignalMedium className="text-white w-[43px] h-[43px] md:w-[150px] md:h-[150px]" />
  </motion.div>
  <motion.div style={{ opacity: opacity4 }} className="absolute inset-0 flex justify-center items-center">
    <SignalHigh className="text-white w-[43px] h-[43px] md:w-[150px] md:h-[150px] " />
  </motion.div>
  <motion.div style={{ opacity: opacity5 }} className="absolute inset-0 flex justify-center items-center">
    <Signal className="text-white w-[43px] h-[43px] md:w-[150px] md:h-[150px]" />
  </motion.div>
</motion.div>

  );
};

export default AnimatedProgress;
