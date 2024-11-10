import ButtonAction from "@/components/atoms/ButtonAction";
import LineAnimation from "@/components/atoms/LineAnimation";
import TitleSection from "@/components/atoms/TitleSection";
import OfferAllTab from "@/components/molecules/OfferAllTab";
import OffersAllCarousel from "@/components/organisms/OffersAllCarousel";
import { ArrowDown, CircleDotDashed, SignalHigh, Wrench } from "lucide-react";
import React from "react";

const OffersAll = () => {
  return (
    <div id="offersAll">
      <div className="offer-container">
        <TitleSection titleBegining="Doskonałość Techniczna dla Twojego Auta." />
        <LineAnimation />
        <div className="tabs-container">
          <OffersAllCarousel />
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
