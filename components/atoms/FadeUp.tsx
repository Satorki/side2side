"use client";
import { motion } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const FadeUp = ({ children, delay, duration }: FadeUpProps) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
