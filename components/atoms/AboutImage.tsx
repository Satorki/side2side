"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Reparing from "../../public/images/repairing.jpg";

const AboutImage = () => {
  return (
    <motion.div className="mt-10">
      <Image
        src={Reparing}
        alt="man repairng car"
        className="w-[800px] right-0 h-auto rounded-l-3xl shadow-medium"
      />
    </motion.div>
  );
};

export default AboutImage;
