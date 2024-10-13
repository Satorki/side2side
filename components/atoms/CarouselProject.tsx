"use client";
import a0 from "../../public/images/Project/0.jpg";
import a1 from "../../public/images/Project/1a.jpg";
import a2 from "../../public/images/Project/2a.jpg";
import a3 from "../../public/images/Project/3.jpg";
import a4 from "../../public/images/Project/4a.jpg";
import a5 from "../../public/images/Project/5.jpg";
import a6 from "../../public/images/Project/6.jpg";
import a7 from "../../public/images/Project/7aa.jpg";
import a7a from "../../public/images/Project/7aaa.jpg";
import a7b from "../../public/images/Project/7ba.jpg";
import a7c from "../../public/images/Project/7ca.jpg";
import a8 from "../../public/images/Project/8a.jpg";
import a9 from "../../public/images/Project/9.jpg";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import FadeUp from "./FadeUp";

const CarouselProject = () => {
  const projects = [
    {
      image: a0,
      title: "Custom Car",
      description: "BMW E46 2JZ - 650 KM / 700 Nm",
    },
    {
      image: a1,
      title: "Car Repair",
      description: "Karosieria na warsztacie.",
    },
    {
      image: a2,
      title: "Car Maintenance",
      description: "Szykowanie do składania części układu zawieszenia.",
    },
    {
      image: a3,
      title: "Car Accessories",
      description:
        "Nanosimy drobne poprawki i już niedługo lakierowanie karoserii.",
    },
    {
      image: a4,
      title: "Car Insurance",
      description:
        "Ostateczny przymiar pozycji kierowcy, zawieszenia i silnika.",
    },
    {
      image: a5,
      title: "Custom Car",
      description: "Silnik w komorze jak i pierwsza części układu chłodzenia.",
    },
    {
      image: a6,
      title: "Car Repair",
      description:
        "Na pokład E46 wchodzą kolejne komponenty Kompletna elektronika od Ecumaster, którą zgra ze sobą KonopackiRacing.",
    },
    {
      image: a7,
      title: "Car Maintenance",
      description: "Blok silnika 2JZ.",
    },
    {
      image: a7a,
      title: "Car Accessories",
      description: "2JZ zmontowany.",
    },
    {
      image: a7b,
      title: "Car Accessories",
      description: "Turbo na 2JZ.",
    },
    {
      image: a7c,
      title: "Car Accessories",
      description: "Wszystko pod maską prawie kompletne.",
    },
    {
      image: a8,
      title: "Car Accessories",
      description:
        "Zwieńczenie 6 miesięcy pracy - Projekt przetestowany i zakończony. BMW E46 2JZ @___kickster___ by Side2Side Motorsport.",
    },
    {
      image: a9,
      title: "Car Insurance",
      description:
        "E46 świeżo zbudowana na ten sezon u nas w Side2Side Motorsport okazuje się bardzo szybką i konkurencyjna konstrukcją dzięki świetnie rozłożonej masie. Sezon DRIFT OPEN 2024 ukończony na P2 w klasyfikacji generalnej!",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[80%] max-w-[1440px] mx-auto">
      <Slider {...settings}>
        {projects.map((image, index) => (
          <div key={index} className="focus:outline-none">
            <Image
              src={image.image}
              alt={image.title}
              className="rounded-xl p-1 md:rounded-2xl transition-transform duration-300 object-cover object-center"
            />
            <FadeUp delay={0.2}>
              <p className="text-tiny pt-5 text-center font-bai">
                {image.description}
              </p>
            </FadeUp>
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-center {
          transform: scale(1.45) translateY(10%);
          z-index: 10;
          position: relative;
        }
        .slick-slide.slick-active:not(.slick-center) {
          transform: scale(0.7);
          opacity: 0.4;
        }
        .slick-slide {
          transition: transform 1s ease;
        }
        .slick-track {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10rem;
        }
        @media (max-width: 3200px) {
          .slick-track {
            height: 80vh;
          }
        }
        @media (max-width: 1900px) {
          .slick-track {
            height: 70vh;
          }
        }
        @media (max-width: 1500px) {
          .slick-track {
            height: 60vh;
          }
        }
        @media (max-width: 1100px) {
          .slick-track {
            height: 50vh;
          }
        }
        @media (max-width: 768px) {
          .slick-center {
            transform: scale(1) translateY(14%);
          }
          .slick-track {
            height: 130vw;
            margin-top: 0rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselProject;
