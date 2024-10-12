"use client";
import projectImage1 from "@/public/images/Projects/project10.jpg";
import projectImage2 from "@/public/images/Projects/project2.jpg";
import projectImage3 from "@/public/images/Projects/project3.jpg";
import projectImage4 from "@/public/images/Projects/project4.jpg";
import projectImage5 from "@/public/images/Projects/project5.jpg";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const CarouselProject = () => {
  const images = [
    projectImage1,
    projectImage2,
    projectImage3,
    projectImage4,
    projectImage5,
  ];

  const settings = {
    className: "center md:h-[50vh] flex justify-center items-center",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="max-w-[1200px] mx-auto my-10 w-[80%]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="px-5 h-[30vh] mt-[15vh] focus:outline-none"
          >
            <Image
              src={image}
              alt="project"
              className="rounded-xl md:rounded-2xl transition-transform duration-300"
            />
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-center img {
          transform: scale(2);
          z-index: 10;
          position: relative;
        }
        .slick-slide.slick-active:not(.slick-center) img {
          transform: scale(0.8);
          opacity: 0.5;
        }
        .slick-slide img {
          transition: transform 1s ease;
        }
        @media (max-width: 768px) {
          .slick-center img {
            transform: scale(3);
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselProject;
