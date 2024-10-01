"use client";
// import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Reparing from "../../public/images/repairing.jpg";

const AboutImage = () => {

  return (
    <div className="flex flex-1">
      <Image
        src={Reparing}
        alt="man repairng car"
        className=""
      />
    </div>
  );
};

export default AboutImage;
