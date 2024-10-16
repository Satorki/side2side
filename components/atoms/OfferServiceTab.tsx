"use client";
import React from "react";
import { motion } from "framer-motion";

interface OfferServiceTabProps {
  icon?: JSX.Element;
  title: string;
  description: string;
  isLast?: boolean;
  delayAnimate?: number;
  durationAnimate?: number;
}

const OfferServiceTab = ({
  icon,
  title,
  description,
  isLast = false,
  delayAnimate = 1,
  durationAnimate = 1,
}: OfferServiceTabProps) => {
  return (
    <div
      className={`flex flex-col gap-1 p-2 md:max-w-[${
        isLast ? "max" : "260px"
      }] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer active:scale-95`}
    >
      <motion.span
        initial={{ color: "#ffffff" }}
        animate={{ color: "#000" }}
        transition={{
          duration: durationAnimate,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: delayAnimate,
          ease: "easeInOut",
        }}
      >
        {icon}
      </motion.span>
      <p className="text-xl font-bold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default OfferServiceTab;
