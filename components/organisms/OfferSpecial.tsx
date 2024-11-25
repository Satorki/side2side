import React, { useEffect, useState } from "react";
import AnimatedTransition from "../atoms/AnimatedTransition";
import TitleSection from "../atoms/TitleSection";
import FadeUp from "../atoms/FadeUp";
import DescriptionSingle from "../atoms/DescriptionSingle";
import ButtonAction from "../atoms/ButtonAction";
import { PhoneCall } from "lucide-react";
import SpecialList from "../atoms/SpecialList";
import chassis1 from "@/public/images/Special/chassis1.jpg";
import chassis2 from "@/public/images/Special/chassis2.jpg";
import chassis3 from "@/public/images/Special/chassis3.jpg";

const OfferSpecial = () => {
  const listItems = [
    {
      id: 1,
      title: "Regeneracja zacisków hamulcowych",
      content:
        "Nasza usługa regeneracji zacisków hamulcowych obejmuje kompleksowe czyszczenie, wymianę uszczelnień oraz testy szczelności, aby zapewnić optymalną wydajność hamulców.",
      gallery:[]
    },
    {
      id: 2,
      title: "Konserwacja podwozia",
      content:
        "Oferujemy profesjonalną konserwację podwozia, która chroni przed korozją i uszkodzeniami mechanicznymi, zapewniając dłuższą żywotność pojazdu.",
      gallery:[chassis1, chassis2, chassis3]
    },
    {
      id: 3,
      title: "Czyszczenie wtrysków benzynowych",
      content:
        "Czyszczenie wtrysków benzynowych poprawia spalanie paliwa, zwiększa moc silnika i zmniejsza zużycie paliwa. Używamy nowoczesnych technologii, aby przywrócić wtryski do pierwotnej sprawności.",
    },
    {
      id: 4,
      title: "Remonty kapitalne silników",
      content:
        "Remonty kapitalne silników obejmują kompleksową diagnostykę, wymianę zużytych części oraz precyzyjne regulacje, które przywracają silnikowi pełną moc i niezawodność.",
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
        <div className="flex flex-col flex-1 gap-5 md:gap-10">
          <TitleSection titleAnimationText="Dodatkowe" titleEnding=" uslugi" />
          <FadeUp delay={0.5} duration={2}>
            <DescriptionSingle
              isBold={true}
              text="Dla wymagajcych klientow mamy specjalne usługi."
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
