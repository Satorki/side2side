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
    offset: ["start start", "end start"], // Adjusted offset for timing
  });

  const changeBackground = useTransform(
    scrollYProgress,
    [0, 0.1, 1], // Define specific points for transition
    [
      "linear-gradient(to right, #231b1b, #575757)", // Initial gradient
      "linear-gradient(to right, #575757, #575757)", // Intermediate state
      "#575757", // Final solid color
    ]
  );

  return (
    <motion.div
      ref={container}
      style={{ backgroundImage: changeBackground }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default BgTransition;
