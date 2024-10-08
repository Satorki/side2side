import ReviewQuote from "@/components/atoms/ReviewQuote";
import TitleSection from "@/components/atoms/TitleSection";
import ReviewSingle from "@/components/molecules/ReviewSingle";
import React from "react";

const Rewievs = () => {
  return (
    <div id="rewievs" className="rewievs">
      <div className="flex flex-col gap-5 justify-center items-center max-w-[1440px] m-auto">
        <TitleSection category="Opinie" title="" />
        <div className="rewievs-container">
          <ReviewSingle
            text="Kilukrotnie korzystałem z usług i nigdy się nie zawiodłem. Powierzony temat wykonany zawsze na 101%. Warszat prowadzony z dbałością o najdrobniejsze detale i przyjaznym podejściem dla klienta.
Reasumowując zdecydowanie polecam :)"
            stars={5}
            name="Dawid Ratajczak"
            logo=""
          />
          <ReviewSingle
            text="Korzystałem z pomocy dwa razy i za każdym razem byłem zadowolony. Miła obsługa, są słowni, dotrzymali umówionych terminów, mają umiarkowane ceny. Szybko stawiają trafną diagnozę i szybko usuwają usterki. Dzisiaj była wymiana czujnika położenia wałka rozrządu.
Wczoraj szybka diagnoza bez kolejki, a dzisiaj 15 minut i zrobione. Rachunek też nie wysoki.
Okazało się też, że serwisuje auta vipów jak na zdjęciu. Jednym słowem POLECAM. 💪"
            name="Mariusz Kalisz"
            stars={5}
            logo=""
          />
          <ReviewSingle
            text="Profesjonalne podejście do klienta. Przy remoncie który wykonywałem zlecili że sprawdzą i ewentualnie wymianią części za moją zgodą żeby zaoszczedzić kolejne rozbieranie i wycziąganie kolejny raz np silnika.Mechanik specjalizuje się w marce BMW ale inne auta nie są mu obce. Polecam."
            stars={5}
            name="Tomek B"
            logo=""
          />
        </div>
        <ReviewQuote />
      </div>
      <style jsx>{`
        .rewievs {
          background-image: radial-gradient(
            circle 800px at 50% 70%,
            #850001,
            #e35e5f
          );
          color: white;
          padding: 2rem 5rem;
        }
        .rewievs-container {
          display: flex;
          gap: 2rem;
          justify-content: space-between;
        }
        @media (max-width: 768px) {
          .rewievs {
            padding: 2rem 2rem;
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
