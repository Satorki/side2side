import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "@/components/atoms/TitleSection";
import ProjectsCarousel from "@/components/molecules/ProjectsCarousel";
import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="px-4 pb-4 flex flex-col gap-4">
        <TitleSection
          titleBegining="Projekty od A do Z"
          titleAnimationText=""
        />
        <FadeUp delay={0.5} duration={2}>
          <DescriptionSingle
            text="Stworzymy dla Ciebie zwycięzajce samochody."
            isBold={true}
          />
        </FadeUp>
      </div>
      <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto">
        <ProjectsCarousel />
      </div>

      <style jsx>{`
        #projects {
          background-color: #302d2d;
          color: white;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          margin: 0 auto;
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
