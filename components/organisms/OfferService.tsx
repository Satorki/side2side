import ButtonAction from "@/components/atoms/ButtonAction";
import React, { useEffect, useState } from "react";
import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "../atoms/TitleSection";
import DescriptionSingle from "../atoms/DescriptionSingle";
import OfferServiceElements from "../molecules/OfferServiceElements";
import { PhoneCall } from "lucide-react";
import AnimatedTransition from "../atoms/AnimatedTransition";
import OfferLeftMenu from "../atoms/OfferLeftMenu";
import AnimatedCircle from "../atoms/AnimatedCircle";

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
      <OfferLeftMenu whichIsHighlighted={0} />
      <div id="offer-service">
        <AnimatedTransition quote="SERWIS" animatedIcon={<AnimatedCircle />} />
        <div className="offer-body">
          <div className="flex flex-col gap-5 md:gap-10">
            <TitleSection titleBegining="Profesjonalna obsługa dostosowana do Ciebie." />
            <FadeUp delay={0.5} duration={2}>
              <DescriptionSingle
                text="Oferujemy kompleksowy serwis dla pojazdów osobnych i dostawczych do 3,5 tony, zapewniając ich sprawność w codziennym użytkowaniu."
                isBold={true}
              />
            </FadeUp>
            {isDesktop && (
              <ButtonAction
                text="Umów wizytę"
                bgColor="#000"
                textColor="#fff"
                icon={<PhoneCall />}
              />
            )}
          </div>

          <div className="description-container">
            <OfferServiceElements />
            {!isDesktop && (
              <ButtonAction
                text="Umów wizytę"
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
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: #fff;
            max-width: 1200px;
            margin: 0 auto;
            gap: 5rem;
          }
          .description-container {
            display: flex;
            flex-direction: column;
            align-items: start;
          }
          #offer-service {
            background-color: #dc2626;
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
              gap: 2rem;
            }
            .description-container {
              gap: 2rem;
            }
            #offer-service {
              height: auto;
              padding: 1rem 1rem 1rem 3.5rem;
              overflow: hidden;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default OfferService;
