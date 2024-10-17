// import React, { useEffect, useState } from "react";
import FadeUp from "../atoms/FadeUp";
import DescriptionSingle from "../atoms/DescriptionSingle";
import TitleSection from "../atoms/TitleSection";
import OfferTunningElements from "../molecules/OfferTunningElements";
import AnimatedTransition from "../atoms/AnimatedTransition";
import { Wrench } from "lucide-react";

const OfferTunning = () => {

  return (
    <div id="offer">
      <AnimatedTransition
        icon={
          <Wrench className="text-white w-[75px] h-[75px] md:w-[200px] md:h-[200px] opacity-30" />
        }
        quote="TUNNING"
        rotating={false}
      />
      <div className="offer-container">
        <div className="overflow-hidden">
          <div className="description-container">
            <TitleSection category="Oferta" titleBegining="Sprawdzony Tuning" />
            <FadeUp delay={0.5} duration={2}>
              <DescriptionSingle
                isBold={true}
                text="Specjalizujemy się w tuningu pojazdów, dostosowując je do indywidualnych preferencji klientów i zapewniając optymalne osiągi."
              />
            </FadeUp>
            <OfferTunningElements />
            {/* <ButtonAction
              text="Zadzwoń do nas"
              bgColor="#000"
              textColor="#fff"
              icon={<PhoneForwarded />}
            /> */}
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
        #offer {
          background-color: #323232;
          padding: 3rem 0rem;
        }

        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
            height: auto;
          }
          .description-container {
            padding: 0rem 1.2rem 2rem 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferTunning;