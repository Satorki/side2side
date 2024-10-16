import ButtonAction from "@/components/atoms/ButtonAction";
import ImageOffer from "@/components/atoms/ImageOffer";
import React, { useEffect, useState } from "react";
import SerwisImage from "@/public/images/Service/offer2.jpeg";

import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "../atoms/TitleSection";
import DescriptionSingle from "../atoms/DescriptionSingle";
import OfferServiceElements from "../molecules/OfferServiceElements";
import { PhoneCall } from "lucide-react";

const OfferService: React.FC = () => {
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
    <div id="offer-service">
      <div className="offer-container">
        <div className="flex-1">
          <div className="p-4">
            <TitleSection
              category="Oferta"
              titleBegining="Profesjonalny Serwis"
            />
            <FadeUp delay={0.5} duration={2}>
              <DescriptionSingle
                text="Oferujemy kompleksowy serwis dla pojazdów osobnych i dostawczych do 3,5 tony, zapewniając ich sprawność w codziennym użytkowaniu."
                isBold={true}
              />
            </FadeUp>
          </div>
          {isWindowMedium && <ImageOffer ImageCurrent={SerwisImage} />}
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="description-container">
            {!isWindowMedium && <ImageOffer ImageCurrent={SerwisImage} />}

            <OfferServiceElements />
            <div className="px-4">
              <ButtonAction
                text="Umów wizytę"
                bgColor="#000"
                textColor="#fff"
                icon={<PhoneCall />}
              />
            </div>
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
          align-items: start;
          gap: 1rem;
        }
        #offer-service {
          background-color: #dc2626;
          padding: 2rem 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
            height: auto;
            padding: 2rem 0;
          }
          .description-container {
            padding: 0rem;
            gap: 2rem;
          }
          #offer-service {
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferService;
