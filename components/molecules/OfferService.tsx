import ButtonAction from "@/components/atoms/ButtonAction";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import ImageOffer from "@/components/atoms/ImageOffer";
import List from "@/components/atoms/List";
import TitleSection from "@/components/atoms/TitleSection";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import FadeUp from "@/components/atoms/FadeUp";

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
    <div id="offer">
      <div className="offer-container">
        <div className="flex-1">
          {isWindowMedium && <ImageOffer />}
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="description-container">
            <TitleSection />

            {!isWindowMedium && <ImageOffer />}

            <FadeUp delay={0.5} duration={2}>
              <DescriptionSingle isBold={true} />
            </FadeUp>
            <List />
            <ButtonAction />
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
          position: sticky;
          top: 75px;
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

export default OfferService;

