"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Reparing from "../../public/images/repairing.jpg";

const AboutImage = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [0, 1]);
  const opacity = useTransform(scrollY, [0, 1000], [0, 1]);
  const y = useTransform(scrollY, [0, 1000], [100, 0]);
  return (
    <motion.div style={{ y, scale, opacity }}>
      <Image
        src={Reparing}
        alt="man repairng car"
        className="rounded-l-3xl shadow-medium"
      />
    </motion.div>
  );
};

export default AboutImage;
