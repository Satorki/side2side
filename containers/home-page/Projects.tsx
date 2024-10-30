import TitleSection from "@/components/atoms/TitleSection";
import ProjectsCarousel from "@/components/molecules/ProjectsCarousel";
import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto">
        <ProjectsCarousel />
      </div>

      <style jsx>{`
        #projects {
          background-color: #303030;
          color: white;
          padding: 2rem 2rem;
          display: flex;
          flex-direction: column;
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
