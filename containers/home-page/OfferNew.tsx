import ButtonAction from "@/components/atoms/ButtonAction";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import ImageOffer from "@/components/atoms/ImageOffer";
import List from "@/components/atoms/List";
import TitleSection from "@/components/atoms/TitleSection";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

interface Props {
  ImageCurrent: StaticImageData;
  category: string;
  title: string;
  description: string;
  listItems: { id: number; title: string }[];
  isReversed?: boolean;
  withCheck?: boolean;
}

const OfferNew: React.FC<Props> = ({
  ImageCurrent,
  category,
  title,
  description,
  listItems,
  isReversed = false,
  withCheck,
}) => {
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
    <div id="offer" className={`offer ${isReversed ? "reversed" : ""}`}>
      <div className={`offer-container ${isReversed ? "reversed" : ""}`}>
        <div className="flex-1">
          {isWindowMedium && <ImageOffer ImageCurrent={ImageCurrent} />}
        </div>
        <div className="flex flex-col gap-4 md:gap-12 flex-1">
          <TitleSection category={category} title={title} />
          {!isWindowMedium && <ImageOffer ImageCurrent={ImageCurrent} />}
          <DescriptionSingle isBold={true} text={description} />
          <List items={listItems} withCheck={withCheck} />
          <ButtonAction bgColor="#000" textColor="#fff" text="Umów wizytę" />
        </div>
      </div>
      <style jsx>{`
        .offer {
          background-color: #850001;
        }
        .offer.reversed {
          background-color: #850001;
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
        .offer-container.reversed {
          flex-direction: row-reverse;
        }
        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
          .offer-container.reversed {
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferNew;
