"use client";
import ButtonAction from "@/components/atoms/ButtonAction";
import ServicesTab from "@/components/molecules/ServicesTab";
import React from "react";

const Offer = () => {
  return (
    <div id="offer">
      <div className="offer-container">
        <div className="flex flex-col gap-3 md:gap-5 font-bai">
          <p className="text-2xl md:text-3xl font-bai">Oferta</p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Najlepsza oferta na rynku.
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10 justify-center">
          <div className="offer-tabs">
            <ServicesTab />
            <ServicesTab />
            <ServicesTab />
          </div>
          <ButtonAction />
        </div>
      </div>

      <style jsx>{`
        #offer {
          color: #fff;
          background: #323232;
        }
        .offer-container {
          display: flex;
          flex-direction: column;
          gap: 5rem;
          align-items: center;
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
          .about-container {
            flex-direction: column;
            padding: 1rem;
            background-image: radial-gradient(
              circle at 50% 70%,
              #850001,
              #e35e5f
            );
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Offer;
