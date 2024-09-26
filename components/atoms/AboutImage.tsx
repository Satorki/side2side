"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Reparing from "../../public/images/repairing.jpg";

const AboutImage = () => {
  const { scrollYProgress } = useScroll();
  const showImage = useTransform(scrollYProgress, [0, 0.8], [1920, 100]);
  return (
    <motion.div style={{ x: showImage }} className="right-0">
      <Image src={Reparing} alt="man repairng car" className="w-full h-auto rounded-3xl shadow-2xl" />
    </motion.div>
  );
};

export default AboutImage;
