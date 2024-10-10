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
        <div className="flex-1">
          <div className="description-container">
            <TitleSection category={category} titleBegining={title} />
            {!isWindowMedium && <ImageOffer ImageCurrent={ImageCurrent} />}
            <DescriptionSingle isBold={true} text={description} />
            <List items={listItems} withCheck={withCheck} />
            <ButtonAction bgColor="#000" textColor="#fff" text="Umów wizytę" />
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
          background-color: #c31111;
          height: 100vh;
        }
        .offer-container.reversed {
          flex-direction: row-reverse;
        }
        .description-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
        }
        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
          }
          .offer-container.reversed {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferNew;
