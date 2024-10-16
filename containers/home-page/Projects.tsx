import AnimatedTransition from "@/components/atoms/AnimatedTransition";
import CarouselProject from "@/components/atoms/CarouselProject";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import { Car } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <AnimatedTransition
        icon={
          <Car className="text-white w-[75px] h-[75px] md:w-[200px] md:h-[200px] opacity-30" />
        }
        quote="PROJEKTY"
        rotating={false}
      />
      <div className="flex flex-col justify-center items-center">
        <div className="font-bai flex flex-col gap-4 items-center pb-4">
          <p className="text-2xl">Projekty</p>
          <div className="flex items-center gap-2">
            <h2 className="text-5xl font-semibold leading-[60px] text-center px-4">
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
          padding: 2rem 2rem;
          display: flex;
          flex-direction: column;
          
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
