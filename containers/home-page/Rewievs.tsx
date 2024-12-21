"use client";
import FadeUp from "@/components/atoms/FadeUp";
import TitleSection from "@/components/atoms/TitleSection";
import ReviewSingle from "@/components/molecules/ReviewSingle";
import React from "react";

const Rewievs = () => {
  return (
    <div id="rewievs">
      <div className="flex flex-col gap-5 md:gap-10 justify-center items-center max-w-[1200px] mx-auto">
        <div className="pt-8">
          <TitleSection titleBegining="Opinie naszych klientów" />
        </div>
        <div className="rewievs-container">
          <FadeUp delay={0.1}>
            <ReviewSingle
              text="Kilukrotnie korzystałem z usług i nigdy się nie zawiodłem. Powierzony temat wykonany zawsze na 101%. Warszat prowadzony z dbałością o najdrobniejsze detale i przyjaznym podejściem dla klienta.
Reasumowując zdecydowanie polecam :)"
              stars={5}
              name="Dawid Ratajczak"
              logo=""
            />
          </FadeUp>

          <FadeUp delay={0.3}>
            <ReviewSingle
              text="Korzystałem z pomocy dwa razy i za każdym razem byłem zadowolony. Miła obsługa, są słowni, dotrzymali umówionych terminów, mają umiarkowane ceny. Szybko stawiają trafną diagnozę i szybko usuwają usterki. Dzisiaj była wymiana czujnika położenia wałka rozrządu.
Wczoraj szybka diagnoza bez kolejki, a dzisiaj 15 minut i zrobione. Rachunek też nie wysoki.
Okazało się też, że serwisuje auta vipów jak na zdjęciu. Jednym słowem POLECAM. 💪"
              name="Mariusz Kalisz"
              stars={5}
              logo=""
            />
          </FadeUp>
          <FadeUp delay={0.5}>
            <ReviewSingle
              text="Profesjonalne podejście do klienta. Przy remoncie który wykonywałem zlecili że sprawdzą i ewentualnie wymianią części za moją zgodą żeby zaoszczedzić kolejne rozbieranie i wycziąganie kolejny raz np silnika.Mechanik specjalizuje się w marce BMW ale inne auta nie są mu obce. Polecam."
              stars={5}
              name="Tomek B"
              logo=""
            />
          </FadeUp>
        </div>
      </div>
      <style jsx>{`
        #rewievs {
          color: white;
          padding: 10rem 0;
          z-index: 20;
          background-color: var(--color-background1);
        }
        .rewievs-container {
          display: flex;
          gap: 2rem;
          justify-content: space-between;
        }
        @media (max-width: 768px) {
          #rewievs {
            padding: 4rem 2rem;
          }
          .rewievs-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Rewievs;
