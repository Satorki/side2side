import ButtonAction from "@/components/atoms/ButtonAction";
import React, { useEffect, useState } from "react";
import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "../atoms/TitleSection";
import DescriptionSingle from "../atoms/DescriptionSingle";
import { PhoneCall } from "lucide-react";
import AnimatedTransition from "../atoms/AnimatedTransition";
import OfferLeftMenu from "../atoms/OfferLeftMenu";
import AnimatedProgress from "../atoms/AnimatedProgress";
import OfferTunningSlider from "../atoms/OfferTunningSlider";

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

  return (
    <div>
      <OfferLeftMenu whichIsHighlighted={1} />
      <div id="offer-service">
        <AnimatedTransition
          quote="TUNNING"
          animatedIcon={<AnimatedProgress />}
        />
        <div className="offer-body">
          <div className="flex flex-col gap-5 md:gap-20 md:pl-20">
            <TitleSection titleBegining="Lepsze osiągi, większa radość z jazdy." />
            <FadeUp delay={0.5} duration={2}>
              <DescriptionSingle
                text="Tuningujemy z pasją, by Twój pojazd osiągał maksimum możliwości."
                isBold={true}
              />
            </FadeUp>

            {isDesktop && (
              <ButtonAction
                text="Sprawdź Nas"
                bgColor="#000"
                textColor="#fff"
                icon={<PhoneCall />}
              />
            )}
          </div>
          <OfferTunningSlider />
          <div className="description-container">
            {!isDesktop && (
              <ButtonAction
                text="Sprawdź Nas"
                bgColor="#000"
                textColor="#fff"
                icon={<PhoneCall />}
              />
            )}
          </div>

          <hr />
        </div>
        <style jsx>{`
          .offer-body {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
          }
          .description-container {
            display: flex;
            flex-direction: column;
            align-items: start;
          }
          #offer-service {
            background-color: #303030;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0rem 2rem 4rem 5rem;
            height: 100vh;
          }

          @media (max-width: 768px) {
            .offer-body {
              flex-direction: column;
              height: auto;
              justify-content: center;
              align-items: flex-start;
              gap: 1rem;
            }
            #offer-service {
              height: auto;
              padding: 0rem 1rem 0rem 3.5rem;
              overflow: hidden;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default OfferService;
