import ButtonAction from "@/components/atoms/ButtonAction";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/Carousel";
import LineAnimation from "@/components/atoms/LineAnimation";
import TitleSection from "@/components/atoms/TitleSection";
import OfferAllTab from "@/components/molecules/OfferAllTab";
import { ArrowDown, CircleDotDashed, SignalHigh, Wrench } from "lucide-react";
import React from "react";

const OffersAll = () => {
  return (
    <div id="offersAll">
      <div className="offer-container">
        <TitleSection titleBegining="Doskonałość Techniczna dla Twojego Auta." />
        <LineAnimation />
        <div className="tabs-container">
          <OfferAllTab
            icon={<Wrench className="w-1/2 h-auto" />}
            title="SERWIS"
            description="Kompleksowy serwis samochodów osobowych i dostawczych do 3,5 tony – dbamy o niezawodność i komfort jazdy na co dzień."
            bgColor="rgba(10, 10, 10, 0.6)"
            button={
              <ButtonAction
                text="Przejdź"
                icon={<ArrowDown />}
                bgColor="#d52727"
              />
            }
          />
          <OfferAllTab
            icon={<SignalHigh className="w-1/2 h-auto" />}
            title="TUNNING"
            description="Prawdziwe osiągi zaczynają się tam, gdzie kończą się kompromisy. Specjalizujemy się w precyzyjnych modyfikacjach: od wydechu po silnik."
            bgColor="rgba(20, 20, 20, 0.6)"
            button={
              <ButtonAction
                text="Przejdź"
                icon={<ArrowDown />}
                bgColor="#d52727"
              />
            }
          />
          <OfferAllTab
            icon={<CircleDotDashed className="w-1/2 h-auto" />}
            title="MOTORSPORT"
            description="Dla fanów rajdów, wyścigów i driftu oferujemy przygotowanie pojazdów, które spełnią najwyższe wymagania motorsportu."
            bgColor="rgba(30, 30, 30, 0.6)"
            button={
              <ButtonAction
                text="Przejdź"
                icon={<ArrowDown />}
                bgColor="#d52727"
              />
            }
          />
        </div>
      </div>
      <style jsx>{`
        #offersAll {
          width: 100%;
          padding: 10rem 0;
        }
        .offer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          color: white;
          padding: 2rem;
          gap: 1.5rem;
        }

        .tabs-container {
          display: flex;
          flex-direction: row;
          gap: 4rem;
          margin: 3rem 0 0 0;
        }
        @media (max-width: 768px) {
          #offersAll {
            padding: 2rem 0;
          }
          .tabs-container {
            flex-direction: column;
            margin: 0;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OffersAll;
