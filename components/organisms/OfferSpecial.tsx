import React, { useEffect, useState } from "react";
import AnimatedTransition from "../atoms/AnimatedTransition";
import TitleSection from "../atoms/TitleSection";
import FadeUp from "../atoms/FadeUp";
import DescriptionSingle from "../atoms/DescriptionSingle";
import ButtonAction from "../atoms/ButtonAction";
import { PhoneCall } from "lucide-react";
import SpecialList from "../atoms/SpecialList";
import chassis1 from "@/public/images/Special/chassis1a.jpg";
import chassis2 from "@/public/images/Special/chassis2a.jpg";
import chassis3 from "@/public/images/Special/chassis3a.jpg";
import chassis4 from "@/public/images/Special/chassis4a.jpg";
import chassis5 from "@/public/images/Special/chassis5a.jpg";
import chassis6 from "@/public/images/Special/chassis6a.jpg";
import chassis7 from "@/public/images/Special/chassis7a.jpg";
import brakes1 from "@/public/images/Special/brakes1a.jpg";
import brakes2 from "@/public/images/Special/brakes2a.jpg";
import brakes3 from "@/public/images/Special/brakes3a.jpg";
import injectors1 from "@/public/images/Special/injectors1a.jpg";
import engine1 from "@/public/images/Special/engine1a.jpg";
import engine2 from "@/public/images/Special/engine2a.jpg";
import engine3 from "@/public/images/Special/engine3a.jpg";
import engine4 from "@/public/images/Special/engine4a.jpg";
import engine5 from "@/public/images/Special/engine5a.jpg";
import engine6 from "@/public/images/Special/engine6a.jpg";
import engine7 from "@/public/images/Special/engine7a.jpg";
import engine8 from "@/public/images/Special/engine8a.jpg";

const OfferSpecial = () => {
  const listItems = [
    {
      id: 1,
      title: "Regeneracja zacisków hamulcowych",
      content:
        "Nasza usługa regeneracji zacisków hamulcowych obejmuje kompleksowe czyszczenie, wymianę uszczelnień oraz testy szczelności, aby zapewnić optymalną wydajność hamulców.",
      gallery: [brakes1.src, brakes2.src, brakes3.src],
    },
    {
      id: 2,
      title: "Konserwacja podwozia",
      content:
        "Oferujemy profesjonalną konserwację podwozia, która chroni przed korozją i uszkodzeniami mechanicznymi, zapewniając dłuższą żywotność pojazdu.",
      gallery: [
        chassis1.src,
        chassis2.src,
        chassis3.src,
        chassis4.src,
        chassis5.src,
        chassis6.src,
        chassis7.src,
      ],
    },
    {
      id: 3,
      title: "Czyszczenie wtrysków benzynowych",
      content:
        "Czyszczenie wtrysków benzynowych poprawia spalanie paliwa, zwiększa moc silnika i zmniejsza zużycie paliwa. Używamy nowoczesnych technologii, aby przywrócić wtryski do pierwotnej sprawności.",
      gallery: [injectors1.src],
    },
    {
      id: 4,
      title: "Remonty kapitalne silników",
      content:
        "Remonty kapitalne silników obejmują kompleksową diagnostykę, wymianę zużytych części oraz precyzyjne regulacje, które przywracają silnikowi pełną moc i niezawodność.",
      gallery: [
        engine1.src,
        engine2.src,
        engine3.src,
        engine4.src,
        engine5.src,
        engine6.src,
        engine7.src,
        engine8.src,
      ],
    },
  ];

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
    <div id="offer-motorsport">
      <AnimatedTransition quote="SPECJALNA" mustScaleDown />

      <div className="offer-container">
        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <TitleSection titleAnimationText="Dodatkowe" titleEnding=" uslugi" />
          <FadeUp delay={0.5} duration={2}>
            <DescriptionSingle
              isBold={true}
              text="Oferujemy szeroki zakres usług, które pomogą Ci zadbać o Twój pojazd,
          od konserwacji po zaawansowane remonty."
            />
          </FadeUp>

          {isDesktop && (
            <ButtonAction
              text="Skontaktuj się"
              bgColor="red"
              textColor="white"
              icon={<PhoneCall />}
              address="tel: +48 533 025 109"
            />
          )}
        </div>

        <div className="description-container">
          <SpecialList items={listItems} />
          {!isDesktop && (
            <ButtonAction
              text="Sprawdź"
              bgColor="red"
              textColor="white"
              icon={<PhoneCall />}
              address="tel: +48 533 025 109"
            />
          )}
        </div>
      </div>
      <style jsx>{`
        #offer-motorsport {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10rem 4rem;
        }

        .offer-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          max-width: 1200px;
          margin: 2rem auto;
          gap: 5rem;
        }
        .description-container {
          display: flex;
          flex-direction: column;
          align-items: start;
          flex: 1;
        }

        @media (max-width: 768px) {
          .offer-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: auto;
            gap: 2rem;
            margin: 0;
          }
          .description-container {
            gap: 2rem;
          }
          #offer-motorsport {
            padding: 2rem 2rem 3rem 2rem;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferSpecial;
