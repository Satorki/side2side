"use client";
import { motion } from "framer-motion";

interface BgTransitionProps {
  children: React.ReactNode;
}

const BgTransition = ({ children }: BgTransitionProps) => {
  return (
    <motion.div
      variants={{
        hidden: {
          backgroundImage: "linear-gradient(to right, #353030, #575757)",
        },
        visible: {
          backgroundImage: "linear-gradient(to right, #232121, #232121)",
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default BgTransition;
