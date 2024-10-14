import ButtonAction from "@/components/atoms/ButtonAction";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";
import ImageOffer from "@/components/atoms/ImageOffer";
import List from "@/components/atoms/List";
import TitleSection from "@/components/atoms/TitleSection";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import FadeUp from "@/components/atoms/FadeUp";

interface Props {
  ImageCurrent: StaticImageData;
  category: string;
  title: string;
  description: string;
  listItems: { id: number; title: string }[];
  isReversed?: boolean;
  withCheck?: boolean;
  offerStyle?: string;
  AnimatedText?: string;
  buttonText?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonIcon?: React.ReactNode;
}

const OfferNew: React.FC<Props> = ({
  ImageCurrent,
  category,
  title,
  description,
  listItems,
  isReversed = false,
  withCheck,
  offerStyle = "",
  AnimatedText,
  buttonText,
  buttonBgColor,
  buttonTextColor,
  buttonIcon,
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
    <div
      id="offer"
      className={`offer ${isReversed ? "reversed" : ""} ${offerStyle}`}
    >
      <div className={`offer-container ${isReversed ? "reversed" : ""} `}>
        <div className="flex-1">
          {isWindowMedium && <ImageOffer ImageCurrent={ImageCurrent} />}
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="description-container">
            <TitleSection
              category={category}
              titleBegining={title}
              titleAnimationText={AnimatedText}
            />

            {!isWindowMedium && <ImageOffer ImageCurrent={ImageCurrent} />}

            <FadeUp delay={0.5} duration={2}>
              <DescriptionSingle isBold={true} text={description} />
            </FadeUp>
            <List items={listItems} withCheck={withCheck} />
            <ButtonAction
              bgColor={buttonBgColor}
              textColor={buttonTextColor}
              text={buttonText}
              icon={buttonIcon}
            />
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
            height: auto;
          }
          .description-container {
            padding: 0rem 1.2rem 2rem 1.2rem;
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
