"use client";
import React, { useEffect, useState } from "react";
import MotorsportImage from "@/public/images/Motorsport/offer9.jpg";
import { PhoneIncoming } from "lucide-react";
import ImageOffer from "../atoms/ImageOffer";
import DescriptionSingle from "../atoms/DescriptionSingle";
import FadeUp from "../atoms/FadeUp";
import ButtonAction from "../atoms/ButtonAction";
import List from "../atoms/List";
import TitleSection from "../atoms/TitleSection";
import { BorderTrail } from "../atoms/BorderTrail";
import OfferLeftMenu from "../atoms/OfferLeftMenuX";
import AnimatedTransition from "../atoms/AnimatedTransition";
import AnimatedCircle from "../atoms/AnimatedCircle";
// import AnimatedTransition from "../atoms/AnimatedTransition";

const OfferMotorsport = () => {
  const listItems = [
    {
      id: 1,
      title: "Przygotowanie techniczne samochodów do zawodów",
      content:
        "Kompleksowe przygotowanie Twojego auta do zawodów – od silnika po zawieszenie, aby było gotowe do startu.",
    },
    {
      id: 2,
      title: "Tuning pod kątem specyficznych dyscyplin sportowych",
      content:
        "Dostosowujemy Twój samochód do wymagań rajdów, wyścigów czy driftu, aby maksymalizować wyniki.",
    },
    {
      id: 3,
      title: "Obsługa techniczna pojazdów na eventach motoryzacyjnych",
      content:
        "Pełna obsługa techniczna podczas eventów, abyś mógł skupić się na osiąganiu najlepszych wyników.",
    },
    {
      id: 4,
      title: "Wsparcie techniczne podczas zawodów i pokazów",
      content:
        "Nasze wsparcie techniczne jest dostępne na miejscu, aby szybko rozwiązać wszelkie problemy.",
    },
    {
      id: 5,
      title: "Modyfikacje układów napędowych i aerodynamicznych",
      content:
        "Modyfikacje, które zwiększają przyspieszenie, stabilność i osiągi Twojego pojazdu na torze.",
    },
  ];

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

  return (
    <div id="offer-motorsport">
      <AnimatedTransition
        quote="Motorsport"
        animatedIcon={<AnimatedCircle />}
      />
      <div className="offer-container">
        <div className="flex flex-col flex-1 gap-5 md:gap-10">
          <TitleSection
            titleAnimationText="Wsparcie"
            titleBegining=" w rywalizacji."
          />
          <FadeUp delay={0.5} duration={2}>
            <DescriptionSingle
              isBold={true}
              text="Dla entuzjastów rajdów, wyścigów tornych i driftu oferujemy kompleksowe przygotowanie pojazdów do motorsportu."
            />
          </FadeUp>
          {isDesktop && (
            <ButtonAction
              text="Sprawdź"
              bgColor="red"
              textColor="white"
              icon={<PhoneIncoming />}
            />
          )}
        </div>
        <div className="description-container">
          <List items={listItems} />
          {!isDesktop && (
            <ButtonAction
              text="Sprawdź"
              bgColor="red"
              textColor="white"
              icon={<PhoneIncoming />}
            />
          )}
        </div>
      </div>
      <style jsx>{`
        #offer-motorsport {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #000;
          padding: 4rem;
        }

        .offer-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: #fff;
          max-width: 1200px;
          margin: 2rem auto;
          gap: 5rem;
        }
        .description-container {
          display: flex;
          flex-direction: column;
          align-items: start;
          flex: 1;
        }

        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: auto;
            gap: 2rem;
            margin: 0;
          }
          .description-container {
            gap: 2rem;
          }
          #offer-motorsport {
            padding: 2rem;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferMotorsport;
