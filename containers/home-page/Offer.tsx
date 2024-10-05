"use client";
import ButtonAction from "@/components/atoms/ButtonAction";
import OfferTab from "@/components/molecules/OfferTab";
import SerwisImage from "../../public/images/Offer/offer3.jpeg";
import TunningImage from "../../public/images/Offer/offer5.jpg";
import MotorsportImage from "../../public/images/Offer/offer6.jpg";

const Offer = () => {
  return (
    <div id="offer">
      <div className="offer-container">
        <div className="flex flex-col  gap-4 md:gap-12 font-bai">
          <p className="text-2xl md:text-3xl font-bai">Oferta</p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Najlepsza oferta na rynku.
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10 justify-center">
          <div className="offer-tabs">
            <OfferTab
              image={SerwisImage}
              title="SERWIS"
              description="Oferujemy kompleksowy serwis dla pojazdów osobowych i dostawczych do 3,5 tony, zapewniając ich sprawność w codziennym użytkowaniu."
            />
            <OfferTab
              image={TunningImage}
              title="Tunning"
              description="Specjalizujemy się w tuningu pojazdów, dostosowując je do indywidualnych preferencji klientów i zapewniając optymalne osiągi."
            />
            <OfferTab
              image={MotorsportImage}
              title="Motorsport"
              description="Dla entuzjastów rajdów, wyścigów torowych i driftu oferujemy kompleksowe przygotowanie pojazdów do motorsportu."
            />
          </div>
        </div>
        <ButtonAction
          bgColor="#F10000"
          textColor="#ffffff"
          text="Umów wizytę"
        />
      </div>

      <style jsx>{`
        #offer {
          padding: 4rem;
          color: #fff;
          background: #323232;
        }
        .offer-container {
          display: flex;
          flex-direction: column;
          gap: 5rem;
          max-width: 1440px;
          margin: 0 auto;
          z-index: 90;
        }

        .offer-tabs {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          #offer {
            padding: 1rem;
          }
          .offer-container {
            gap: 1rem;
          }
          .offer-tabs {
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Offer;
