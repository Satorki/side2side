"use client";
import About from "@/containers/home-page/About";
import Hero from "@/containers/home-page/Hero";
import Offer from "@/containers/home-page/Offer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0.5, 1], [0, -300]);

  return (
    <div>
      <Hero />
      <About />
      <motion.div style={{ y }}>
        <Offer />
      </motion.div>
      {/* <Projects /> */}
    </div>
  );
}
