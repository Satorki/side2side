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
          animate={{ color: "#ff2424" }}
          transition={{
            duration: 2,
            delay: index * 0.2,
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
