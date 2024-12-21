"use client";
import React, { useEffect, useState } from "react";
import { PhoneIncoming } from "lucide-react";
import DescriptionSingle from "../atoms/DescriptionSingle";
import FadeUp from "../atoms/FadeUp";
import ButtonAction from "../atoms/ButtonAction";
import List from "../atoms/List";
import TitleSection from "../atoms/TitleSection";
import AnimatedTransition from "../atoms/AnimatedTransition";
import AnimatedCircle from "../atoms/AnimatedCircle";

const OfferMotorsport = () => {
  const listItems = [
    {
      id: 1,
      title: "Przygotowanie techniczne samochodów do zawodów",
    },
    {
      id: 2,
      title: "Tuning pod kątem specyficznych dyscyplin sportowych",
    },
    {
      id: 3,
      title: "Obsługa techniczna pojazdów na eventach motoryzacyjnych",
    },
    {
      id: 4,
      title: "Wsparcie techniczne podczas zawodów i pokazów",
    },
    {
      id: 5,
      title: "Modyfikacje układów napędowych i aerodynamicznych",
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
        quote="MOTORSPORT"
        animatedIcon={<AnimatedCircle />}
        mustScaleDown
      />

      <div className="offer-container">
        <div className="flex flex-col flex-1 gap-5 md:gap-10">
          <TitleSection
            titleAnimationText="Wsparcie"
            titleEnding=" w rywalizacji."
          />
          <FadeUp delay={0.5} duration={2}>
            <DescriptionSingle
              isBold={true}
              text="Dla entuzjastów rajdów, wyścigów torowych i driftu oferujemy kompleksowe przygotowanie pojazdów do motorsportu."
            />
          </FadeUp>

          {isDesktop && (
            <ButtonAction
              text="Sprawdź"
              bgColor="red"
              textColor="white"
              icon={<PhoneIncoming />}
              address="tel: +48 533 025 109"
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
              address="tel: +48 533 025 109"
            />
          )}
        </div>
      </div>
      <style jsx>{`
        #offer-motorsport {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10rem 4rem;
        }

        .offer-container {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          
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
            padding: 2rem 2rem 3rem 2rem;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferMotorsport;
