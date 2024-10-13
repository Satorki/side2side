import CarouselProject from "@/components/atoms/CarouselProject";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import TitleSection from "@/components/atoms/TitleSection";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="flex flex-col justify-center items-center">
        <TitleSection
          category="Projekty"
          titleBegining=""
          titleAnimationText=""
        />
        <TitleSection category="" titleBegining=" - KickSter" titleAnimationText="BMW E46 2JZ" />
        <CarouselProject />
        <DescriptionSingle text="" />
      </div>
      <style jsx>{`
        .projects {
          background-color: #323232;
          color: white;
          padding: 3rem 2rem;
          height: auto;
        }
        @media (max-width: 768px) {
          .projects {
            padding: 2rem 0rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
