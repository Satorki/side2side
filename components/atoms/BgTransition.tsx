"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface BgTransitionProps {
  children: React.ReactNode;
}

const BgTransition = ({ children }: BgTransitionProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const changeBackground = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["#696767", "#1D2321", "#1D2321"]
  );

  return (
    <motion.div
      ref={container}
      style={{ backgroundColor: changeBackground }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default BgTransition;
