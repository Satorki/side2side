import CarouselProject from "@/components/atoms/CarouselProject";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import TitleSection from "@/components/atoms/TitleSection";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="flex flex-col gap-4 justify-center items-center">
        <TitleSection category="Projekty" titleBegining="" />
        <CarouselProject />
        <TitleSection
          category=""
          titleBegining=""
          titleAnimationText="KickSter E36"
        />
        <DescriptionSingle text="Pomoc w stworzeniu samochodu dla Kickster" />
      </div>
      <style jsx>{`
        .projects {
          background-color: #323232;
          color: white;
          padding: 2rem 5rem;
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
