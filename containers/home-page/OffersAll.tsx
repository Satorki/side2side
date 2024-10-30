import ButtonAction from "@/components/atoms/ButtonAction";
import LineAnimation from "@/components/atoms/LineAnimation";
import OfferAllTab from "@/components/molecules/OfferAllTab";
import { ArrowDown, CircleDotDashed, SignalHigh, Wrench } from "lucide-react";
import React from "react";

const OffersAll = () => {
  return (
    <div id="offersAll">
      <div className="offer-container">
        <div className="font-bai flex flex-col gap-4">
          <h2 className="text-4xl font-semibold leading-[50px]">
            Wzniesiemy Twój samochód na wyższy poziom.
          </h2>
        </div>
        <LineAnimation />
        <div className="tabs-container">
          <OfferAllTab
            icon={<Wrench className="w-1/2 h-auto" />}
            title="SERWIS"
            description="Oferujemy kompleksowy serwis dla pojazdów osobnych i dostawczych do 3,5 tony, zapewniając ich sprawność w codziennym użytkowaniu."
            bgColor="rgba(173, 26, 27, 0.5)"
            button={<ButtonAction text="Przejdź" icon={<ArrowDown />} bgColor="#d52727" />}
          />
          <OfferAllTab
            icon={<SignalHigh className="w-1/2 h-auto" />}
            title="TUNNING"
            description="Prawdziwa wydajność zaczyna się tam, gdzie kończą się kompromisy. Tuning to sztuka precyzji. Zajmujemy się modyfikacjami — od wydechu po silnik. "
            bgColor="rgba(68, 68, 68,0.5)"
            button={<ButtonAction text="Przejdź" icon={<ArrowDown />} bgColor="#d52727" />}
          />
          <OfferAllTab
            icon={<CircleDotDashed className="w-1/2 h-auto" />}
            title="MOTORSPORT"
            description="Dla entuzjastów rajdów, wyścigów tornych i driftu oferujemy kompleksowe przygotowanie pojazdów do motorsportu."
            bgColor="rgba(0, 0, 0,0.5)"
            button={<ButtonAction text="Przejdź" icon={<ArrowDown />} bgColor="#d52727" />}
          />
        </div>
      </div>
      <style jsx>{`
        #offersAll {
          width: 100%;
        }
        .offer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          color: white;
          padding: 2rem;
          gap: 1.5rem;
        }

        .tabs-container {
          display: flex;
          flex-direction: row;
          gap: 4rem;
          margin: 3rem 0 0 0;
        }
        @media (max-width: 768px) {
          #offersAll {
            padding: 0rem;
          }
          .tabs-container {
            flex-direction: column;
            margin: 0;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OffersAll;
