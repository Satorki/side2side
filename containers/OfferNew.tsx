import ButtonAction from "@/components/atoms/ButtonAction";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import ImageOffer from "@/components/atoms/ImageOffer";
import List from "@/components/atoms/List";
import TitleSection from "@/components/atoms/TitleSection";
import React, { useEffect, useState } from "react";
import SerwisImage from "../public/images/Offer/offer3.jpeg";

const OfferNew = () => {
  // SCREEN SIZE HANDLER
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
          {isWindowMedium ? <ImageOffer ImageCurrent={SerwisImage} /> : null}
        </div>
        <div className="flex flex-col gap-4 md:gap-12 flex-1">
          <TitleSection category="Usługi" title="Sprawdzony Serwis" />
          {isWindowMedium ? null : <ImageOffer ImageCurrent={SerwisImage} />}
          <DescriptionSingle
            isBold={true}
            text="Oferujemy kompleksowy serwis dla pojazdów osobowych i dostawczych do 3,5 tony, zapewniając ich sprawność w codziennym użytkowaniu."
          />
          <List
            items={[
              { id: 1, title: "Regularne przeglądy techniczne" },
              { id: 2, title: "Diagnostyka i naprawa układów mechanicznych" },
              {
                id: 3,
                title: "Wymiana oleju, filtrów i płynów eksploatacyjnych",
              },
              {
                id: 4,
                title: "Serwis hamulców, zawieszenia i układu wydechowego",
              },
              {
                id: 5,
                title:
                  "Obsługa flot pojazdów firmowych (przeglądy, umowy serwisowe)",
              },
            ]}
          />

          <ButtonAction bgColor="#000" textColor="#fff" text="Umów wizytę" />
        </div>
      </div>
      <style jsx>{`
        #offer {
          background-image: radial-gradient(
            circle at 70% 70%,
            #850001,
            #e35e5f
          );
        }
        .offer-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 5rem;
          align-items: center;
          color: #fff;
          padding: 4rem;
          max-width: 1440px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            height: auto;
          }
      `}</style>
    </div>
  );
};

export default OfferNew;
