"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const letters = Array.from(text);

  return (
    <div className="animated-text">
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
      <style jsx>{`
        .animated-text {
          display: inline-block;
          text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000,
            1px -1px 0 #000;
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;
