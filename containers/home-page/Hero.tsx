"use client";
import HeroArrow from "@/components/atoms/HeroArrow";
import HeroImage from "@/components/atoms/HeroImage";
import HeroSmoke from "@/components/molecules/HeroSmoke";
import HeroTitle from "@/components/atoms/HeroTitle";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isSmokeVisible, setIsSmokeVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSmokeVisible(false);
      } else {
        setIsSmokeVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="hero" className="h-screen">
      <HeroTitle />
      <HeroImage />
      {isSmokeVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isSmokeVisible ? 1 : 0 }}
        >
          <HeroSmoke />
        </motion.div>
      )}
      <HeroArrow />
    </div>
  );
};

export default Hero;
