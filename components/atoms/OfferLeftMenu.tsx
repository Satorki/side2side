"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  whichIsHighlighted: number;
}
const OfferLeftMenu = ({ whichIsHighlighted }: Props) => {
  const offerList = ["Serwis", "Tuning", "Motorsport"];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "start end"],
  });
  const height = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={container} className="sticky top-[59px] md:top-[74px]">
      <motion.div style={{ height }}>
        <div className=" h-screen left-0 w-10 md:w-14 flex flex-col items-center justify-between bg-[#444444] font-bai text-white pt-[35px] z-10">
          <p className="-rotate-90">OFERTA</p>
          <div className="flex flex-col gap-16 items-center pb-[100px] md:pb-[120px]">
            {offerList.map((offer, index) => (
              <p
                key={index}
                className={`-rotate-90 ${
                  whichIsHighlighted === index
                    ? "opacity-100 underline"
                    : "opacity-40"
                }`}
              >
                {offer}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferLeftMenu;
