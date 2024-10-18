import ButtonAction from "@/components/atoms/ButtonAction";
import React, { useEffect, useState } from "react";
import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "../atoms/TitleSection";
import DescriptionSingle from "../atoms/DescriptionSingle";
import OfferServiceElements from "../molecules/OfferServiceElements";
import { CircleDotDashed, PhoneCall } from "lucide-react";
import AnimatedTransition from "../atoms/AnimatedTransition";
import OfferLeftMenu from "../atoms/OfferLeftMenu";

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
    <div id="offer-service">
      <AnimatedTransition
        icon={
          <CircleDotDashed className="text-white w-[43px] h-[43px] md:w-[150px] md:h-[150px] opacity-30" />
        }
        quote="SERWIS"
      />

      <div className="offer-body">
        <div className="flex flex-col gap-10 md:gap-20">
          <TitleSection titleBegining="Zaspokojamy potrzeby." />
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
          max-width: 1440px;
          margin: 0 auto;
          gap: 4rem;
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
        }

        @media (max-width: 768px) {
          .offer-body {
            flex-direction: column;
            height: auto;
          }
          .description-container {
            gap: 2rem;
          }
          #offer-service {
            height: auto;
            padding: 0rem 1rem 0rem 3.5rem;
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferService;
