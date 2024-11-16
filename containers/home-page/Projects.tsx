import ButtonAction from "@/components/atoms/ButtonAction";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "@/components/atoms/TitleSection";
import ProjectsCarousel from "@/components/molecules/ProjectsCarousel";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import CompleteCar from "@/public/images/Project/project10.jpg";
import leftCar from "@/public/images/Project/8.jpg";
import rightCar from "@/public/images/Project/8.jpg";
import { Button } from "react-scroll";

const Projects = () => {
  const [showCarousel, setShowCarousel] = useState(false);

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
              text="Sprawdź jak to wyglądało"
              bgColor="#d52727"
              textColor="#FFF"
              icon={<ArrowDownRight />}
              hasBorderTrail
              onClick={() => setShowCarousel(true)}
            />
          </FadeUp>
        </div>

        <div className="flex flex-col justify-center items-center">
          {!showCarousel ? (
            <div className="flex justify-around items-center w-full">
              <div className="">BMW E45 2JZ</div>
              <Image
                src={CompleteCar}
                alt="complete car"
                className="rounded-2xl shadow-lg h-[50vh] w-auto object-cover"
              />
              <div className="">640 KM / 700 Nm</div>
            </div>
          ) : (
            <ProjectsCarousel />
          )}
        </div>
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
