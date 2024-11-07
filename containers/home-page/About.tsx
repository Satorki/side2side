import ImageAbout from "@/components/atoms/ImageAbout";
// import TitleSection from "@/components/atoms/TitleSection";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import ButtonAction from "@/components/atoms/ButtonAction";
import AboutDescriptions from "@/components/molecules/AboutDescriptionsX";
import { CornerRightDown } from "lucide-react";
import TitleSection from "@/components/atoms/TitleSection";
import FadeUp from "@/components/atoms/FadeUp";
import DescriptionSingle from "@/components/atoms/DescriptionSingle";

const About = () => {
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
    <div id="about">
      <div className="about-container">
        {isDesktop && (
          <>
            <ImageAbout />
          </>
        )}

        <div className="description-container">
          <TitleSection titleBegining="Twoje auto, nasza pasja – pełen potencjał na drodze i torze. " />
          {!isDesktop && (
            <>
              <ImageAbout />
            </>
          )}
          <div>
            <FadeUp delay={1}>
              <DescriptionSingle text="Wiemy, że Twój samochód to coś więcej niż tylko pojazd – to pasja i styl życia. Naszą misją jest dostarczanie usług, które zapewnią niezawodność i wyjątkowe osiągi w każdych warunkach. W Side2Side Motorsport łączymy precyzję, doświadczenie i miłość do motoryzacji, by wyjść naprzeciw każdemu wyzwaniu."/>
            </FadeUp>
          </div>
          <ButtonAction
            bgColor="#d52727"
            textColor="#FFF"
            text="Sprawdź"
            icon={<CornerRightDown />}
          />
        </div>
      </div>
      <style jsx>{`
        #about {
          padding: 10rem 0;
        }
        .description-container {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 2.5rem;
          color: white;
        }
        .about-container {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          #about {
            padding: 2rem 0;
          }
          .description-container {
            width: 100%;
            height: auto;
            color: white;
            gap: 1.5rem;
            padding: 2rem;
          }
          .about-container {
            display: flex;
            flex-direction: column;
            padding: 0rem 0rem 1rem 0rem;
            height: auto;
          }
          .about-mobile {
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
