import ButtonAction from "@/components/atoms/ButtonAction";
import React, { useEffect, useState } from "react";
import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "../atoms/TitleSection";
import DescriptionSingle from "../atoms/DescriptionSingle";
import OfferServiceElements from "../molecules/OfferServiceElements";
import { Car, PhoneCall } from "lucide-react";
import AnimatedTransition from "../atoms/AnimatedTransition";
import AnimatedWrench from "../atoms/AnimatedWrench";

const OfferService: React.FC = () => {
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

  const showButtons = () => (
    <div className="flex flex-col gap-2">
      <ButtonAction
        text="Zadzwoń"
            bgColor="#d52727"
            textColor="#FFF"
        icon={<PhoneCall />}
      />
      
      <DescriptionSingle text="lub zarezerwuj przez:" isBold />
      <ButtonAction
        text="Motointegrator"
            bgColor="#d52727"
            textColor="#FFF"
        icon={<Car />}
      />
    </div>
  );

  return (
    <div id="offer-service">
      <AnimatedTransition quote="SERWIS" animatedIcon={<AnimatedWrench />} />
      <div className="offer-body">
        <div className="flex flex-col flex-1 gap-5 md:gap-10">
          <TitleSection
            titleBegining="Profesjonalna obsługa"
            titleEnding="dostosowana do Ciebie."
          />
          <FadeUp delay={0.5} duration={2}>
            <DescriptionSingle
              text="Oferujemy kompleksowy serwis dla pojazdów osobnych i dostawczych do 3,5 tony, zapewniając ich sprawność w codziennym użytkowaniu."
              isBold={true}
            />
          </FadeUp>
          {isDesktop && showButtons()}
        </div>

        <div className="description-container">
          <OfferServiceElements />
          {!isDesktop && showButtons()}
        </div>
      </div>
      <style jsx>{`
        #offer-service {
          /* background-color: #ba0a0a; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 10rem 4rem;
        }
        .offer-body {
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
          flex: 1;
        }

        @media (max-width: 768px) {
          .offer-body {
            flex-direction: column;
            height: auto;
            gap: 0;
            margin: 0;
          }
          .description-container {
            padding: 2rem 0rem;
            gap: 2rem;
          }
          #offer-service {
            height: auto;
            margin: 2rem;
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferService;
