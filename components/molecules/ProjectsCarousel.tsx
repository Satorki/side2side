import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../atoms/Carousel";
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
import CarouselTab from "../atoms/CarouselTab";

const ProjectsCarousel = () => {
  const imageList = [
    {
      image: a1,
      title: "Car Repair",
      description: "Karosieria na warsztacie.",
    },
    {
      image: a3,
      title: "Car Accessories",
      description:
        "Nanosimy drobne poprawki i już niedługo lakierowanie karoserii.",
    },
    {
      image: a2,
      title: "Car Maintenance",
      description: "Szykowanie do składania części układu zawieszenia.",
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
        "Zwieńczenie 6 miesięcy pracy - Projekt przetestowany i zakończony.",
    },
    {
      image: a9,
      title: "Car Insurance",
      description:
        "Sezon DRIFT OPEN 2024 ukończony na P2 w klasyfikacji generalnej!",
    },
  ];

  return (
    <div className="relative w-full px-4 mb-16">
      <Carousel>
        <CarouselNavigation
          className="absolute -bottom-20 left-auto top-auto w-full justify-start gap-2"
          classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
          alwaysShow
        />
        <CarouselContent className="-ml-4 md:mr-24">
          {imageList.map((item, index) => (
            <CarouselItem
              key={index}
              className=" xl:basis-1/3 md:basis-1/2"
            >
              <CarouselTab
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
