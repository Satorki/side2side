import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "../atoms/Carousel";
import OfferAllTab from "../molecules/OfferAllTab";
import { ArrowDown, CircleDotDashed, SignalHigh, Wrench } from "lucide-react";
import ButtonAction from "../atoms/ButtonAction";

const OffersAllCarousel = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carouselItems = [
    {
      icon: <Wrench className="w-1/2 h-auto" />,
      title: "SERWIS",
      description:
        "Oferujemy kompleksowy serwis samochodów osobowych i dostawczych do 3,5 tony – dbamy o niezawodność i komfort jazdy na co dzień.",
      bgColor: "rgba(30, 30, 30, 0.6)",
      button: (
        <ButtonAction
          text="Przejdź"
          icon={<ArrowDown />}
          address="offer-service"
          offset={-79}
        />
      ),
    },
    {
      icon: <SignalHigh className="w-1/2 h-auto" />,
      title: "TUNING",
      description:
        "Prawdziwe osiągi zaczynają się tam, gdzie kończą się kompromisy. Specjalizujemy się w precyzyjnych modyfikacjach: od wydechu po silnik.",
      bgColor: "rgba(20, 20, 20, 0.6)",
      button: (
        <ButtonAction
          text="Przejdź"
          icon={<ArrowDown />}
          address="offer-tuning"
          offset={-40}
        />
      ),
    },
    {
      icon: <CircleDotDashed className="w-1/2 h-auto" />,
      title: "MOTORSPORT",
      description:
        "Dla miłośników rajdów, wyścigów i driftu oferujemy kompleksowe przygotowanie pojazdów w różnych dziedzinach, zapewniając niezawodność i wyjątkowe osiągi.",
      bgColor: "rgba(10, 10, 10, 0.6)",
      button: (
        <ButtonAction
          text="Przejdź"
          icon={<ArrowDown />}
          address="offer-motorsport"
          offset={-40}
        />
      ),
    },
  ];

  return (
    <>
      {!isDesktop ? (
        <div className="relative w-full">
          <Carousel>
            <CarouselContent className="-ml-4 max-w-[300px]">
              {carouselItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/3 pl-4">
                  <OfferAllTab
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    bgColor={item.bgColor}
                    button={item.button}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselIndicator className="absolute w-full justify-center" />
          </Carousel>
        </div>
      ) : (
        <div className="flex gap-16">
          {carouselItems.map((item, index) => (
            <OfferAllTab
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
              button={item.button}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default OffersAllCarousel;
