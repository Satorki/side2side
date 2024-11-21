import React, { useEffect, useState } from "react";
import AnimatedTransition from "../atoms/AnimatedTransition";
import TitleSection from "../atoms/TitleSection";
import FadeUp from "../atoms/FadeUp";
import DescriptionSingle from "../atoms/DescriptionSingle";
import ButtonAction from "../atoms/ButtonAction";
import { PhoneCall } from "lucide-react";
import ImageAbout from "../atoms/ImageAbout";
import SpecialList from "../atoms/SpecialList";

const OfferSpecial = () => {
  const listItems = [
    {
      id: 1,
      title: "Regeneracja zacisków hamulcowych",
      content:
        "Kompleksowe przygotowanie Twojego auta do zawodów – od silnika po zawieszenie, aby było gotowe do startu.",
    },
    {
      id: 2,
      title: "Konserwacja podwozia",
      content:
        "Dostosowujemy Twój samochód do wymagań rajdów, wyścigów czy driftu, aby maksymalizować wyniki.",
    },
    {
      id: 3,
      title: "Czyszczeie wtrysów benzynowych",
      content:
        "Pełna obsługa techniczna podczas eventów, abyś mógł skupić się na osiąganiu najlepszych wyników.",
    },
    {
      id: 4,
      title: "Remonty kapitalne silników",
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
      <AnimatedTransition quote="SPECJALNA" mustScaleDown />

      <div className="offer-container">
        <div className="flex flex-col flex-1 gap-5 md:gap-10">
          <TitleSection titleAnimationText="Dodatkowe" titleEnding=" uslugi" />
          <FadeUp delay={0.5} duration={2}>
            <DescriptionSingle
              isBold={true}
              text="Dla wymagajcych klientow mamy specjalne usługi."
            />
          </FadeUp>
          
          <SpecialList items={listItems} />
          {isDesktop && (
            <ButtonAction
              text="Skontaktuj się"
              bgColor="red"
              textColor="white"
              icon={<PhoneCall />}
              address="tel: +48 533 025 109"
            />
          )}
        </div>

        <div className="description-container">
          {!isDesktop && (
            <ButtonAction
              text="Sprawdź"
              bgColor="red"
              textColor="white"
              icon={<PhoneCall />}
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
            padding: 2rem 2rem 3rem 2rem;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferSpecial;
