import ButtonAction from "@/components/atoms/ButtonAction";
import React, { useEffect, useState } from "react";
import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "../atoms/TitleSection";
import DescriptionSingle from "../atoms/DescriptionSingle";
import { PhoneCall } from "lucide-react";
import AnimatedTransition from "../atoms/AnimatedTransition";
import AnimatedProgress from "../atoms/AnimatedProgress";
import OfferTunningElements from "../molecules/OfferTunningElements";

const OfferTunning: React.FC = () => {
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
    <div id="offer-tuning">
      <AnimatedTransition quote="TUNING" animatedIcon={<AnimatedProgress />} />

      <div className="offer-body">
        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <TitleSection
            titleBegining="Lepsze osiągi, większa "
            titleAnimationText="radość"
            titleEnding=" z jazdy."
          />
          <FadeUp delay={0.5} duration={2}>
            <DescriptionSingle
              text="Tuningujemy z pasją, by Twój pojazd osiągał maksimum możliwości."
              isBold={true}
            />
          </FadeUp>

          {isDesktop && (
            <ButtonAction
              text="Umów konsultację"
              bgColor="#d52727"
              textColor="#FFF"
              icon={<PhoneCall />}
              address="tel: +48 533 025 109"
            />
          )}
        </div>

        <div className="description-container">
          <OfferTunningElements />

          {!isDesktop && (
            <ButtonAction
              text="Umów konsultację"
              bgColor="#d52727"
              textColor="#FFF"
              icon={<PhoneCall />}
              address="tel: +48 533 025 109"
            />
          )}
        </div>
      </div>
      <style jsx>{`
        #offer-tuning {
          /* background-color: #303030; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem;
        }
        .offer-body {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          width: 100%;
          max-width: 1200px;
          margin: 2rem auto;
          gap: 4rem;
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
            justify-content: center;
            align-items: flex-start;
            margin: 0;
            gap: 2rem;
          }
          #offer-tuning {
            height: auto;
            overflow: hidden;
            padding: 2rem;
          }
          .description-container {
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferTunning;
