"use client";
import Offers from "@/components/organisms/Offers";
import AboutNew from "@/containers/home-page/AboutNew";
import Contact from "@/containers/home-page/Contact";
import Hero from "@/containers/home-page/Hero";
import Projects from "@/containers/home-page/Projects";
import Rewievs from "@/containers/home-page/Rewievs";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  // ANIMATION START
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // ABOUT ANIMATION
  const opacityDown = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <div>
      <Hero />
      <motion.div style={{ opacity: opacityDown }}>
        <AboutNew />
      </motion.div>
      <div ref={container}></div>
      <Offers />
      <Projects />
      <Rewievs />
      <Contact />
    </div>
  );
}
