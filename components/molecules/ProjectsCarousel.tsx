import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from "../atoms/Carousel";
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
import CompleteCar from "@/public/images/Project/project10.jpg";
import CarouselTab from "../atoms/CarouselTab";
import { Spinner } from "@nextui-org/react";

const ProjectsCarousel = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const imageList = [
    {
      id: 0,
      image: CompleteCar,
      title: "Completed Car BMW E46 2JZ",
      description: "",
    },
    {
      id: 1,
      image: a3,
      title: "Car Skeleton",
      description:
        "Nanosimy drobne poprawki i już niedługo lakierowanie karoserii.",
    },
    {
      id: 2,
      image: a2,
      title: "Car Parts for Suspension",
      description: "Szykowanie do składania części układu zawieszenia.",
    },
    {
      id: 3,
      image: a4,
      title: "Driver fitting to car",
      description:
        "Ostateczny przymiar pozycji kierowcy, zawieszenia i silnika.",
    },
    {
      id: 4,
      image: a5,
      title: "Engine in car",
      description: "Silnik w komorze jak i pierwsza części układu chłodzenia.",
    },
    {
      id: 5,
      image: a6,
      title: "Car Electronics",
      description:
        "Kompletna elektronika od Ecumaster, którą zgra ze sobą KonopackiRacing.",
    },
    {
      id: 6,
      image: a7,
      title: "Engine Block",
      description: "Blok silnika 2JZ.",
    },
    {
      id: 7,
      image: a7a,
      title: "Engine completed",
      description: "2JZ zmontowany.",
    },
    {
      id: 8,
      image: a7b,
      title: "Turbo on 2JZ",
      description: "Turbo na 2JZ.",
    },
    {
      id: 9,
      image: a7c,
      title: "Engine inside car almost completed",
      description: "Wszystko pod maską prawie kompletne.",
    },
    {
      id: 10,
      image: a8,
      title: "Car ready",
      description:
        "Zwieńczenie 6 miesięcy pracy - Projekt przetestowany i zakończony.",
    },
    {
      id: 11,
      image: a9,
      title: "Drift Open 2024 car completed",
      description:
        "Sezon DRIFT OPEN 2024 ukończony na P2 w klasyfikacji generalnej!",
    },
  ];

  return (
    <div className="relative w-full">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spinner size="lg" />
        </div>
      ) : (
        <Carousel>
          <CarouselContent className="-ml-6 max-w-[1100px]">
            {imageList.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 pl-6">
                {(item.id === 0 && (
                  <CarouselTab
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    showDescription={false}
                  />
                )) || (
                  <CarouselTab
                    image={item.image}
                    title={item.title}
                    number={item.id}
                    description={item.description}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation alwaysShow />
          <CarouselIndicator classNameButton="w-2.5 h-2.5" />
        </Carousel>
      )}
    </div>
  );
};

export default ProjectsCarousel;
