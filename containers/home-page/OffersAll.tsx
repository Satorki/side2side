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
            Wzniesiemy Twój samochód na nowy poziom.
          </h2>
        </div>
        <LineAnimation />
        <div className="tabs-container">
          <OfferAllTab
            icon={<Wrench className="w-1/2 h-auto" />}
            title="SERWIS"
            description="Oferujemy kompleksowy serwis dla pojazdów osobnych i dostawczych do 3,5 tony, zapewniając ich sprawność w codziennym użytkowaniu."
            bgColor="#AD1A1B"
          />
          <OfferAllTab
            icon={<SignalHigh className="w-1/2 h-auto" />}
            title="TUNNING"
            description="Nasze usługi tuningowe obejmują modyfikację silnika, optymalizację układu wydechowego, ulepszenia zawieszenia i montaż zaawansowanych systemów elektronicznych."
            bgColor="#444444"
          />
          <OfferAllTab
            icon={<CircleDotDashed className="w-1/2 h-auto" />}
            title="MOTORSPORT"
            description="Dla entuzjastów rajdów, wyścigów tornych i driftu oferujemy kompleksowe przygotowanie pojazdów do motorsportu."
            bgColor="#000000"
          />
        </div>
      </div>
      <style jsx>{`
        #offersAll {
          width: 100%;
          padding: 4rem 0;
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
            padding: 1rem 0rem;
          }
          .tabs-container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default OffersAll;
