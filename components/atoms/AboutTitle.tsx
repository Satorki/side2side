"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const AboutTitle = () => {
  const { scrollY } = useScroll();

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let transform = [270, 275];

  if (!isLargeScreen) {
    transform = [210, 220];
  }

  const colorO = useTransform(scrollY, transform, ["#e35e5f", "#ffffff"]);
  const colorN = useTransform(scrollY, [285, 295], ["#e35e5f", "#ffffff"]);
  const colorA = useTransform(scrollY, [295, 305], ["#e35e5f", "#ffffff"]);
  const colorS = useTransform(scrollY, [300, 310], ["#e35e5f", "#ffffff"]);

  return (
    <div className="z-10 bg-[#e35e5f] font-jura">
                
      <motion.span
        style={{ color: colorO }}
        className="rounded-lg text-[2rem] font-bold ml-1"
      >
        O
      </motion.span>
      <motion.span
        style={{ color: colorN }}
        className="text-[2rem] font-bold ml-4"
      >
        N
      </motion.span>
      <motion.span style={{ color: colorA }} className="text-[2rem] font-bold">
        A
      </motion.span>
      <motion.span
        style={{ color: colorS }}
        className="rounded-lg text-[2rem] font-bold mr-1"
      >
        S
      </motion.span>
    </div>
  );
};

export default AboutTitle;
