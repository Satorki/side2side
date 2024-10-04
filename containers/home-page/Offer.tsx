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
            <OfferTab image={SerwisImage} title="Serwis" />
            <OfferTab image={TunningImage} title="Tunning" />
            <OfferTab image={MotorsportImage} title="Motorsport" />
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
        }

        .offer-tabs {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 768px) {
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
