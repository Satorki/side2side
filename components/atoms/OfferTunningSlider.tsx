"use client";
import React from "react";
import Slider from "react-slick";
import FadeUp from "./FadeUp";
import {
  Cable,
  ChevronsDownUp,
  CircleFadingPlus,
  Cog,
  Wind,
} from "lucide-react";
import Image from "next/image";
import car1 from "@/public/images/Tunning/car1a.jpg";
import car2 from "@/public/images/Tunning/car2a.jpg";
import car3 from "@/public/images/Tunning/car3a.jpg";
import car4 from "@/public/images/Tunning/car4a.jpg";
import car5 from "@/public/images/Tunning/car5a.jpg";
import { dot } from "node:test/reporters";

const OfferTunningSlider = () => {
  const tunningList = [
    {
      id: 1,
      title: "Modyfikacje silnika",
      description:
        "Więcej mocy i lepsza reakcja na pedał gazu. Oferujemy chip tuning i zmianę mapy silnika.",
      icon: <Cog className="w-1/2 h-1/2" />,
      image: car5,
    },
    {
      id: 2,
      title: "Optymalizacja układu wydechowego",
      description:
        "Więcej mocy i lepszy dźwięk. Optymalizujemy układ wydechowy, aby dostosować go do Twoich wymagań.",
      icon: <Wind className="w-1/2 h-1/2" />,
      image: car3,
    },
    {
      id: 3,
      title: "Ulepszenia zawieszenia",
      description:
        "Lepszy komfort i stabilność jazdy. Dostosujemy zawieszenie do Twoich potrzeb.",
      icon: <ChevronsDownUp className="w-1/2 h-1/2" />,
      image: car1,
    },
    {
      id: 4,
      title: "Zmiany w układzie hamulcowym",
      description:
        "Lepsza kontrola nad pojazdem i szybsze hamowanie. Oferujemy zmiany w układzie hamulcowym.",
      icon: <CircleFadingPlus className="w-1/2 h-1/2" />,
      image: car2,
    },
    {
      id: 5,
      title: "Montaż zaawansowanych systemów elektronicznych",
      description:
        "Więcej precyzji i efektywności. Oferujemy montaż zaawansowanych systemów elektronicznych.",
      icon: <Cable className="w-1/2 h-1/2" />,
      image: car4,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    fade: true,
    dots: true,
  };
  // w-[80vw] md:w-[40vw] h-auto
  return (
    <div className="flex justify-center w-full h-auto my-10">
      <div className="flex flex-col items-center justify-center">
        <Slider {...settings}>
          {tunningList.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center justify-between"
            >
              <Image
                src={image.image}
                alt={image.title}
                className="w-full h-auto rounded-xl object-cover"
              />
              <FadeUp delay={0.2}>
                <div className="flex flex-col gap-2 mt-14 p-5 h-[30vh] bg-[#373333] rounded-xl">
                  <p className="text-xl font-bold">{image.title}</p>
                  <p>{image.description}</p>
                </div>
              </FadeUp>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>
        {`
          :global(.slick-slider) {
            width: 70%;
            max-width: 500px;
          }
          :global(.slick-next) {
            margin-right: 2rem;
          }

          :global(.slick-prev) {
            margin-left: 2rem;
          }

          :global(ul.slick-dots) {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
          :global(.slick-dots li) {
            margin-top: 20px;
          }
          :global(.slick-dots li button) {
            width: 22px;
            height: 22px;
            font-size: 16px;
            font-weight: bold;
            color: #000;
            background-color: #918f8f;
            border-radius: 50%;
            cursor: pointer;
            outline: none;
          }
          :global(.slick-dots li.slick-active button) {
            color: #fff;
          }
          :global(.slick-dots li button:before) {
            content: counter(dot) ".";
            counter-increment: dot;
          }
          :global(.slick-dots) {
            counter-reset: dot;
          }
        `}
      </style>
    </div>
  );
};

export default OfferTunningSlider;
