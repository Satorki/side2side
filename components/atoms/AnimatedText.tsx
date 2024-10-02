"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const letters = Array.from(text);

  return (
    <div className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ color: "#ffffff" }}
          animate={{ color: "#000000" }}
          transition={{
            duration: 3,
            delay: index * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 5,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
