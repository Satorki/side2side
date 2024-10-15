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

const OfferMotorsport = () => {
  const listItems = [
    {
      id: 1,
      title: "Przygotowanie techniczne samochodów do zawodów",
      content:
        "Twoje auto potrzebuje precyzyjnych przygotowań, aby sprostać wymaganiom zawodów? Oferujemy kompleksowe przygotowanie techniczne, zapewniając, że każdy aspekt Twojego pojazdu będzie gotowy do startu – od silnika po zawieszenie.",
    },
    {
      id: 2,
      title: "Tuning pod kątem specyficznych dyscyplin sportowych",
      content:
        "Każda dyscyplina motorsportu ma swoje wymagania. Niezależnie od tego, czy to rajdy, wyścigi torowe czy drift, dostosujemy Twój samochód do specyfiki zawodów, aby osiągnąć maksymalne wyniki w konkretnej konkurencji.",
    },
    {
      id: 3,
      title: "Obsługa techniczna pojazdów na eventach motoryzacyjnych",
      content:
        "Zapewniamy pełną obsługę techniczną Twojego pojazdu podczas eventów. Nasi specjaliści zadbają o sprawność auta, tak abyś mógł skupić się wyłącznie na zawodach i osiąganiu jak najlepszych wyników.",
    },
    {
      id: 4,
      title: "Wsparcie techniczne podczas zawodów i pokazów",
      content:
        "Niezależnie od miejsca i czasu, nasze wsparcie techniczne podczas zawodów czy pokazów motoryzacyjnych jest dostępne dla Ciebie. Jesteśmy na miejscu, aby szybko i skutecznie rozwiązywać ewentualne problemy techniczne.",
    },
    {
      id: 5,
      title: "Modyfikacje układów napędowych i aerodynamicznych",
      content:
        "Oferujemy modyfikacje układów napędowych i aerodynamicznych, które zapewnią lepsze przyspieszenie, większą stabilność i optymalne osiągi na torze. Spraw, aby Twój pojazd był liderem na zawodach.",
    },
  ];

  const [isWindowMedium, setIsWindowMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowMedium(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="offer-motorsport">
      <div className="offer-container">
        <div className="flex-1">
          {isWindowMedium && <ImageOffer ImageCurrent={MotorsportImage} />}
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="description-container">
            <TitleSection
              category="Oferta"
              titleAnimationText="Wsparcie"
              titleBegining=" Motorsport"
            />

            {!isWindowMedium && <ImageOffer ImageCurrent={MotorsportImage} />}

            <FadeUp delay={0.5} duration={2}>
              <div className="relative p-2 rounded-xl">
                <DescriptionSingle
                  isBold={true}
                  text="Dla entuzjastów rajdów, wyścigów tornych i driftu oferujemy kompleksowe przygotowanie pojazdów do motorsportu."
                />
                <BorderTrail
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>
            </FadeUp>
            <List items={listItems} />
            <ButtonAction
              text="Sprawdź"
              bgColor="red"
              textColor="white"
              icon={<PhoneIncoming />}
            />
          </div>
        </div>
        <hr />
      </div>
      <style jsx>{`
        .offer-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: #fff;
          max-width: 1440px;
          margin: 0 auto;
        }
        .description-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
        }
        #offer-motorsport {
          position: sticky;
          top: 75px;
          background-color: #000;
        }

        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
            height: auto;
          }
          .description-container {
            padding: 2rem 1.2rem 2rem 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferMotorsport;
