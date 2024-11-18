import ButtonAction from "@/components/atoms/ButtonAction";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "@/components/atoms/TitleSection";
import ProjectsCarousel from "@/components/molecules/ProjectsCarousel";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import CompleteCar from "@/public/images/Project/project10.jpg";
import leftCar from "@/public/images/Project/3.jpg";
import rightCar from "@/public/images/Project/7aaa.jpg";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  const fadeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div id="projects">
      <div className="text-white px-8 md:px-0 flex flex-col max-w-[1200px] mx-auto">
        <div className="flex flex-col flex-1 gap-5 md:gap-10 py-3">
          <TitleSection
            titleBegining="Projekty od A do Z"
            titleAnimationText=""
          />
          <FadeUp delay={0.5} duration={2}>
            <DescriptionSingle
              text="Stworzymy dla Ciebie zwyciężające samochody."
              isBold={true}
            />
          </FadeUp>
          <FadeUp delay={0.8} duration={2}>
            <DescriptionSingle text="We współpracy z naszym serwisem został stworzony od postaw samochód dla KickSter'a - BMW E45 2JZ - 650 KM / 700 Nm przystosowany do zawodów driftowych." />
          </FadeUp>
          <FadeUp delay={1.1} duration={2}>
            <ButtonAction
              text="Sprawdź jak to wyglądało "
              bgColor="#d52727"
              textColor="#FFF"
              icon={<ArrowLeft />}
              hasBorderTrail
              onClick={() => setShowCarousel((prev) => !prev)}
            />
          </FadeUp>
        </div>

        <AnimatePresence mode="wait">
          {!showCarousel ? (
            <motion.div
              className="flex items-center w-full justify-center overflow-hidden"
              key="image"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.7 }}
            >
              <Image
                src={leftCar}
                alt="left car"
                className="h-[30vh] rounded-2xl -mr-10 w-auto opacity-90"
              />
              <Image
                src={CompleteCar}
                alt="complete car"
                className="rounded-2xl shadow-lg h-[50vh] w-auto object-cover z-20"
              />
              <Image
                src={rightCar}
                alt="right car"
                className="h-[30vh] rounded-2xl -ml-10 w-auto opacity-90"
              />
            </motion.div>
          ) : (
            <motion.div
              key="carousel"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.7 }}
            >
              <ProjectsCarousel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style jsx>{`
        #projects {
          padding: 10rem 0;
        }
        @media (max-width: 768px) {
          #projects {
            padding: 2rem 0rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
