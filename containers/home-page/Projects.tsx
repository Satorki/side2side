import CarouselProject from "@/components/atoms/CarouselProject";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import TitleSection from "@/components/atoms/TitleSection";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="flex flex-col gap-4 justify-center items-center">
        <TitleSection category="Projekty" title="" />
        <CarouselProject />
        <TitleSection category="" title="KickSter E36" />
        <DescriptionSingle text="Pomoc w stworzeniu samochodu dla Kickster" />
      </div>
      <style jsx>{`
        .projects {
          background-color: #323232;
          color: white;
          padding: 2rem 5rem;
        }
      `}</style>
    </div>
  );
};

export default Projects;
