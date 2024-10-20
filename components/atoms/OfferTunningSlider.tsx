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
import Engine from "@/public/images/Tunning/silnik2.jpg";
import Pipe from "@/public/images/Tunning/wydechA.jpg";
import Suspension from "@/public/images/Tunning/zawieszenieA.jpg";
import Breaks from "@/public/images/Tunning/hamulceA.jpg";
import Electricity from "@/public/images/Tunning/elektryka.jpg";
import Image from "next/image";

const OfferTunningSlider = () => {
  const tunningList = [
    {
      id: 1,
      title: "Modyfikacje silnika",
      description:
        "Więcej mocy i lepsza reakcja na pedał gazu. Oferujemy chip tuning i zmianę mapy silnika.",
      icon: <Cog className="w-1/2 h-1/2" />,
      image: Engine,
    },
    {
      id: 2,
      title: "Optymalizacja układu wydechowego",
      description:
        "Więcej mocy i lepszy dźwięk. Optymalizujemy układ wydechowy, aby dostosować go do Twoich wymagań.",
      icon: <Wind className="w-1/2 h-1/2" />,
      image: Pipe,
    },
    {
      id: 3,
      title: "Ulepszenia zawieszenia",
      description:
        "Lepszy komfort i stabilność jazdy. Dostosujemy zawieszenie do Twoich potrzeb.",
      icon: <ChevronsDownUp className="w-1/2 h-1/2" />,
      image: Suspension,
    },
    {
      id: 4,
      title: "Zmiany w układzie hamulcowym",
      description:
        "Lepsza kontrola nad pojazdem i szybsze hamowanie. Oferujemy zmiany w układzie hamulcowym.",
      icon: <CircleFadingPlus className="w-1/2 h-1/2" />,
      image: Breaks,
    },
    {
      id: 5,
      title: "Montaż zaawansowanych systemów elektronicznych",
      description:
        "Więcej precyzji i efektywności. Oferujemy montaż zaawansowanych systemów elektronicznych.",
      icon: <Cable className="w-1/2 h-1/2" />,
      image: Electricity,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    prevArrow: <></>,
  };
  return (
    <div className="flex  w-full">
      <div className="w-[70vw] md:w-[30vw] h-auto">
        <Slider {...settings} className=" bg-zinc-900 rounded-xl p-2" >
          {tunningList.map((image) => (
            <div key={image.id} className="rounded-xl">
              <Image
                src={image.image}
                alt={image.title}
                className="w-full h-auto rounded-xl object-cover"
              />
              <FadeUp delay={0.2}>
                <p className="text-xl font-bold py-5">{image.title}</p>{" "}
                <p className="">{image.description}</p>
              </FadeUp>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OfferTunningSlider;
