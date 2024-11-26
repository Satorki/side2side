import React, { useEffect, useState } from "react";
import AnimatedTransition from "../atoms/AnimatedTransition";
import TitleSection from "../atoms/TitleSection";
import FadeUp from "../atoms/FadeUp";
import DescriptionSingle from "../atoms/DescriptionSingle";
import ButtonAction from "../atoms/ButtonAction";
import { PhoneCall } from "lucide-react";
import SpecialList from "../atoms/SpecialList";
import chassis1 from "@/public/images/Special/chassis1b.jpg";
import chassis2 from "@/public/images/Special/chassis2b.jpg";
import chassis3 from "@/public/images/Special/chassis3b.jpg";
import chassis4 from "@/public/images/Special/chassis4b.jpg";
import chassis5 from "@/public/images/Special/chassis5b.jpg";
import chassis6 from "@/public/images/Special/chassis6b.jpg";
import chassis7 from "@/public/images/Special/chassis7b.jpg";
import brakes1 from "@/public/images/Special/brakes1b.jpg";
import brakes2 from "@/public/images/Special/brakes2b.jpg";
import brakes3 from "@/public/images/Special/brakes3b.jpg";
import injectors1 from "@/public/images/Special/injectors1b.jpg";
import engine1 from "@/public/images/Special/engine1b.jpg";
import engine2 from "@/public/images/Special/engine2b.jpg";
import engine3 from "@/public/images/Special/engine3b.jpg";
import engine4 from "@/public/images/Special/engine4b.jpg";
import engine5 from "@/public/images/Special/engine5b.jpg";
import engine6 from "@/public/images/Special/engine6b.jpg";
import engine7 from "@/public/images/Special/engine7b.jpg";
import engine8 from "@/public/images/Special/engine8b.jpg";
import AnimatedStar from "../atoms/AnimatedStar";

const OfferSpecial = () => {
  const listItems = [
    {
      id: 1,
      title: "Remonty kapitalne silników",
      content:
        "Remonty kapitalne silników obejmują kompleksową diagnostykę, wymianę zużytych części oraz precyzyjne regulacje, które przywracają silnikowi pełną moc i niezawodność.",
      gallery: [
        engine1.src,
        engine2.src,
        engine7.src,
        engine3.src,
        engine4.src,
        engine5.src,
        engine6.src,
        engine8.src,
      ],
    },
    {
      id: 2,
      title: "Konserwacja podwozia",
      content:
        "Oferujemy profesjonalną konserwację podwozia, która chroni przed korozją i uszkodzeniami mechanicznymi, zapewniając dłuższą żywotność pojazdu.",
      gallery: [
        chassis2.src,
        chassis1.src,
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
      title: "Regeneracja zacisków hamulcowych",
      content:
        "Nasza usługa regeneracji zacisków hamulcowych obejmuje kompleksowe czyszczenie, wymianę uszczelnień oraz testy szczelności, aby zapewnić optymalną wydajność hamulców.",
      gallery: [brakes1.src, brakes2.src, brakes3.src],
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
    <div id="offer-special">
      <AnimatedTransition
        quote="SPECJALNA"
        mustScaleDown
        animatedIcon={<AnimatedStar />}
      />

      <div className="offer-container">
        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <TitleSection titleAnimationText="Dodatkowe" titleEnding=" usługi" />
          <FadeUp delay={0.5} duration={2}>
            <DescriptionSingle
              isBold={true}
              text="Oferujemy szeroki zakres usług, które pomogą Ci zadbać o Twój pojazd,
          od konserwacji po zaawansowane remonty."
            />
          </FadeUp>

          {isDesktop && (
            <ButtonAction
              text="Umów wizytę"
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
              text="Umów wizytę"
              bgColor="red"
              textColor="white"
              icon={<PhoneCall />}
              address="tel: +48 533 025 109"
            />
          )}
        </div>
      </div>
      <style jsx>{`
        #offer-special {
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
          width: 100%;
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
          #offer-special {
            padding: 2rem 2rem 3rem 2rem;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferSpecial;
