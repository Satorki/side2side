import CarouselProject from "@/components/atoms/CarouselProject";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="flex flex-col justify-center items-center">
        <div className="font-bai flex flex-col gap-4 items-center">
          <p className="text-2xl">Projekty</p>
          <div className="flex items-center gap-2">
            <h2 className="text-5xl font-semibold leading-[60px] text-center">
              KickSter - BMW E46 2JZ
            </h2>
          </div>
        </div>
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
